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

namespace W3Scout\ContaoYoutubelitespeedembedBundle\Widget;

use Contao\BackendTemplate;
use Contao\Widget;
use Contao\StringUtil;

class YoutubeLiteSpeedEmbedWidget extends Widget
{
    /**
     * Template
     * @var string
     */
    protected $blnSubmitInput = true;



    /**
     * @var string
     */
    protected $strTemplate = 'be_widget'; // Backend-Template-Name

    public function generate()
    {
        return sprintf(
            '<input type="text" name="%s" id="ctrl_%s" class="tl_text" value="%s">',
            $this->strName,
            $this->strId,
            StringUtil::specialchars($this->varValue)
        );
    }
}
