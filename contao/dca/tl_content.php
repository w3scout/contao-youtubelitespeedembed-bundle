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

use W3Scout\ContaoYoutubelitespeedembedBundle\Controller\ContentElement\YoutubeLiteSpeedEmbedController;

/**
 * Content element
 */
$GLOBALS['TL_DCA']['tl_content']['palettes'][YoutubeLiteSpeedEmbedController::TYPE] = '{type_legend},type,headline;{source_legend},video_title,youtube;{player_legend},youtubeOptions,playerSize,playerAspect,playerStart,autoload,autopause,playerCaption;{splash_legend},splashImage;{template_legend:hide},customTpl;{protected_legend:hide},protected;{expert_legend:hide},guests,cssID;{invisible_legend:hide},invisible,start,stop';

$GLOBALS['TL_DCA']['tl_content']['fields']['video_title'] = [
    'label' => &$GLOBALS['TL_LANG']['tl_content']['youtube_lite_speed_video_title'],
    'inputType' => 'text',
    'eval' => [
        'tl_class' => 'w50 clr',
        'mandatory' => false,
    ],
    'sql' => "varchar(255) NOT NULL default ''",
];

$GLOBALS['TL_DCA']['tl_content']['fields']['autoload'] = [
    'label'             => &$GLOBALS['TL_LANG']['tl_content']['youtube_lite_speed_autoload'],
    'inputType'         => 'checkbox',
    'eval'              => array('tl_class'=>'clr w50 m12'),
    'sql'               => array('type' => 'boolean', 'default' => false)
];
$GLOBALS['TL_DCA']['tl_content']['fields']['autopause'] = [
    'label'             => &$GLOBALS['TL_LANG']['tl_content']['youtube_lite_speed_autopause'],
    'inputType'         => 'checkbox',
    'eval'              => array('tl_class'=>'w50 m12'),
    'sql'               => array('type' => 'boolean', 'default' => false)
];
