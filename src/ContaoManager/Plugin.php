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

namespace W3Scout\ContaoYoutubelitespeedembedBundle\ContaoManager;

use W3Scout\ContaoYoutubelitespeedembedBundle\W3ScoutContaoYoutubelitespeedembedBundle;
use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;

class Plugin implements BundlePluginInterface
{
    /**
     * @return array
     */
    public function getBundles(ParserInterface $parser)
    {
        return [
            BundleConfig::create(W3ScoutContaoYoutubelitespeedembedBundle::class)
                ->setLoadAfter([ContaoCoreBundle::class]),
        ];
    }
}
