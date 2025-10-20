const logoContent = {imgURL: '/resources/icons/icon.svg', imgAlt: 'Logo'}

const menuContent = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Newest', link: '/newest'}
]

const selectorContent = [
    {selector: 'filter', name: 'Filter'},
    {selector: 'sort', name: 'Sort'}
]

const filterContent = [
    {value: 'default-filter', content: 'Filter'},
    {value: 'html', content: 'HTML'},
    {value: 'css', content: 'CSS'},
    {value: 'js', content: 'JavaScript'},
    {value: 'python', content: 'Python'},
    {value: 'misc', content: 'Misc'}
]

const sortContent = [
    {value: 'default-sort', content: 'Sort'},
    {value: 'alphabetical', content: 'Alphabetical'},
    {value: 'alphabetical-reverse', content: 'Alphabetical Reverse'},
    {value: 'date', content: 'Date'},
    {value: 'date-reverse', content: 'Date Reverse'}
]


function headerContent() {
    const mainMenu = menuContent.map(item => 
        <ul className="main-nav">
            <li><a href={menuContent.link}>{menuContent.name}</a></li>
        </ul>
    )

    const logoMenu = logoContent.map(item =>
        <ul className="logo">
            <li id="logo"><img src={logoContent.imgURL} alt={logoContent.imgAlt}></img></li>
            <li id="logo-text"><a href='#'>Vibe Coding</a></li>
            <li id="logo-text"><a href='#'>Development Log</a></li>
        </ul>
    )

    // Build Filter Selector
    const filterSelector = filterContent.map(item =>
        <select name="filter" id="filter">
            <option value={filterContent.value}>{filterContent.content}</option>
        </select>
    )

    // Build Sort Selector
    const sortSelector = sortContent.map(item =>
        <select name="sort" id="sort">
            <option value={sortContent.value}>{sortContent.content}</option>
        </select>
    )

    return (
        <header>
            <nav>
                {logoMenu}
                <ul className="selectors">
                    <li><label for="filter" class="hidden">Filter</label>{sortSelector}</li>
                    <li><label for="sort" class="hidden">Sort</label>{sortSelector}</li>
                </ul>
                {mainMenu}
            </nav>
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headerContent())