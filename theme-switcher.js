var themeSwitcher = {};
themeSwitcher.styles = '<style>.theme-button {border-radius: .25rem;box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, .1);position: fixed;top: 30%;z-index: 998;right: 0;}.theme-expanded-button {right: 256px !important;}.theme-expanded-layout {display: block !important;}.theme-switcher {position: absolute;width: 256px;height: 100vh;background: #232323;color: white;z-index: 0;display: none;right: 0;top: 0;}.theme{background-color:#3A3F44 !important;color:white !important;}.theme-selected{background-color:white !important;color:#3A3F44 !important;}</style>';
themeSwitcher.blocks = '<button class="btn btn-primary theme-button"><i class="fas fa-cog fa-spin"></i></button><div class="theme-switcher"><div class="row"><div class="col"><h1 class="p-2 text-center">Themes</h1><div id="theme-data"></div></div></div>';
themeSwitcher.button = null;
themeSwitcher.layout = null;
themeSwitcher.themes = [{
    'theme-name': 'default',
    'theme-link': '#'
}, {
    'theme-name': 'cerulean',
    'theme-link': 'https://bootswatch.com/4/cerulean/bootstrap.min.css'
}, {
    'theme-name': 'darkly',
    'theme-link': 'https://bootswatch.com/4/darkly/bootstrap.min.css'
}, {
    'theme-name': 'litera',
    'theme-link': 'https://bootswatch.com/4/litera/bootstrap.min.css'
}, {
    'theme-name': 'materia',
    'theme-link': 'https://bootswatch.com/4/materia/bootstrap.min.css'
}, {
    'theme-name': 'sandstone',
    'theme-link': 'https://bootswatch.com/4/sandstone/bootstrap.min.css'
}, {
    'theme-name': 'slate',
    'theme-link': 'https://bootswatch.com/4/slate/bootstrap.min.css'
}, {
    'theme-name': 'superhero',
    'theme-link': 'https://bootswatch.com/4/superhero/bootstrap.min.css'
}, {
    'theme-name': 'cosmo',
    'theme-link': 'https://bootswatch.com/4/cosmo/bootstrap.min.css'
}, {
    'theme-name': 'flatly',
    'theme-link': 'https://bootswatch.com/4/flatly/bootstrap.min.css'
}, {
    'theme-name': 'lumen',
    'theme-link': 'https://bootswatch.com/4/lumen/bootstrap.min.css'
}, {
    'theme-name': 'minty',
    'theme-link': 'https://bootswatch.com/4/minty/bootstrap.min.css'
}, {
    'theme-name': 'simplex',
    'theme-link': 'https://bootswatch.com/4/simplex/bootstrap.min.css'
}, {
    'theme-name': 'solar',
    'theme-link': 'https://bootswatch.com/4/solar/bootstrap.min.css'
}, {
    'theme-name': 'united',
    'theme-link': 'https://bootswatch.com/4/united/bootstrap.min.css'
}, {
    'theme-name': 'cyborg',
    'theme-link': 'https://bootswatch.com/4/cyborg/bootstrap.min.css'
}, {
    'theme-name': 'journal',
    'theme-link': 'https://bootswatch.com/4/journal/bootstrap.min.css'
}, {
    'theme-name': 'lux',
    'theme-link': 'https://bootswatch.com/4/lux/bootstrap.min.css'
}, {
    'theme-name': 'pulse',
    'theme-link': 'https://bootswatch.com/4/pulse/bootstrap.min.css'
}, {
    'theme-name': 'sketchy',
    'theme-link': 'https://bootswatch.com/4/sketchy/bootstrap.min.css'
}, {
    'theme-name': 'spacelab',
    'theme-link': 'https://bootswatch.com/4/spacelab/bootstrap.min.css'
}, {
    'theme-name': 'yeti',
    'theme-link': 'https://bootswatch.com/4/yeti/bootstrap.min.css'
}];
themeSwitcher.designingThemeBlocks = function() {
    var data = $('#theme-data');
    data.append('<ul class="list-group ">');
    $.each(themeSwitcher.themes, function(index, element) {
        data.append('<li class="list-group-item d-flex justify-content-between align-items-center theme" data-links="' + element['theme-link'] + '">' + element['theme-name'].toUpperCase() + '</li>');
    });
    data.append('</ul>');
};
themeSwitcher.switcherFunction = function() {
    $(this).toggleClass('theme-expanded-button', 'slow');
    themeSwitcher.layout.toggleClass('theme-expanded-layout', 'slow');
};
themeSwitcher.switchTheme = function() {
    var themelink = $(this).attr('data-links');
    $('#theme-id').attr('href', themelink);
    $('.theme').each(function() {
        $(this).removeClass('theme-selected');
    });
    $(this).addClass('theme-selected');
};
themeSwitcher.start = function() {
    $('head').append('<link rel="stylesheet" href="" id="theme-id" />');
    $('head').append(themeSwitcher.styles);
    $('body').append(themeSwitcher.blocks);
    themeSwitcher.designingThemeBlocks();
    themeSwitcher.button = $('.theme-button');
    themeSwitcher.layout = $('.theme-switcher');
    themeSwitcher.themes = $('.theme');
    themeSwitcher.button.click(themeSwitcher.switcherFunction);
    themeSwitcher.themes.click(themeSwitcher.switchTheme);
};

themeSwitcher.addTheme = function(themeName, themePath) {
    themeSwitcher.themes.push({
        'theme-name': themeName,
        'theme-link': themePath
    });
};