<?php

declare(strict_types=1);

/*
 * This file is part of Contao-YoutubeLiteSpeedEmbed-Bundle.
 *
 * (c) Darko Selesi 2025 <hallo@w3scouts.com>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/w3scout/contao-youtubeliteembed-bundle
 */

namespace W3Scout\ContaoYoutubelitespeedembedBundle\Controller\ContentElement;

use Contao\ContentModel;
use Contao\CoreBundle\Controller\ContentElement\AbstractContentElementController;
use Contao\CoreBundle\DependencyInjection\Attribute\AsContentElement;
use Contao\CoreBundle\Image\ImageFactoryInterface;
use Contao\CoreBundle\Twig\FragmentTemplate;
use Contao\Template;
use Contao\StringUtil;
use Contao\System;
use Contao\FilesModel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

#[AsContentElement(category: 'media')]
class YoutubeLiteSpeedEmbedController extends AbstractContentElementController
{
    public const TYPE = 'youtube_lite_speed_embed';

    public function __construct(private readonly ImageFactoryInterface $imageFactory)
    {
        $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/w3scoutcontaoyoutubelitespeedembed/app.js|static';
        $GLOBALS['TL_CSS'][]        = 'bundles/w3scoutcontaoyoutubelitespeedembed/app.css|static';
    }

    protected function getResponse(Template $template, ContentModel $model, Request $request): Response
    {
        $template->video_title = $model->video_title;
        $template->youtube = $model->youtube;

        $size = StringUtil::deserialize($model->playerSize);
        if (!\is_array($size) || empty($size[0]) || empty($size[1]))
        {
            $template->size = ' width="640" height="auto"';
            $template->width = "640px";
            $template->height = "auto";
        }
        else
        {
            $template->size = ' width="' . $size[0] . '" height="' . $size[1] . '"';
            $template->width = $size[0] . 'px';
            $template->height = $size[1] . 'px';
        }

        $template->splash_image = '';
        if ($model->splashImage)
        {
            $objImage = FilesModel::findByUuid($model->singleSRC);

            if (null !== $objImage)
            {
                $imgSize = StringUtil::deserialize($model->size);
                $rootDir = System::getContainer()->getParameter('kernel.project_dir');
                $objImage->path = $rootDir . '/' . $objImage->path;

                $image = $this->imageFactory->create(
                    $objImage->path,
                    [$imgSize[0], $imgSize[1], $imgSize[2]]
                );

                if (null !== $image)
                {
                    $template->splash_image = $image->getUrl($rootDir);
                }
            }
        }

        $template->aspect = str_replace(':', ' / ', $model->playerAspect);
        $template->playerCaption = $model->playerCaption;
        $template->playerStart = $model->playerStart;
        $template->autopause = $model->autopause;

        $params = array();
        $options = StringUtil::deserialize($model->youtubeOptions);
        $domain = 'https://www.youtube.com';

        #dump($options);

        if (\is_array($options))
        {
            foreach ($options as $option)
            {
                switch ($option)
                {
                    case 'youtube_fs':
                    case 'youtube_rel':
                    case 'youtube_controls':
                        $params[] = substr($option, 8) . '=0';
                        break;

                    case 'youtube_hl':
                        $params[] = substr($option, 8) . '=' . substr($GLOBALS['TL_LANGUAGE'], 0, 2);
                        break;

                    case 'youtube_iv_load_policy':
                        $params[] = substr($option, 8) . '=3';
                        break;

                    case 'youtube_nocookie':
                        $domain = 'https://www.youtube-nocookie.com';
                        $template->nocookie = true;
                        break;

                    default:
                        $params[] = substr($option, 8) . '=1';
                }
            }
        }

        $url = $domain . '/embed/' . $model->youtube;

        if (!empty($params))
        {
            $url .= '?' . implode('&amp;', $params);

            $template->params = sprintf('params="%s"', implode('&', $params));

        }

        $template->src = $url;

        return $template->getResponse();
    }
}
