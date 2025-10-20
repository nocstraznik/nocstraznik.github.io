# Personal Site

This site will end up being a playground to test ideas and tools. I will try to use the most advanced things I can understand. This markdown document will basically be a jornal of sorts to compile information from various documentation relevent to building this site.

## Main

The main things that I intend to use include React, React Bricks, Tailwind, Node.js

## Languages

Frontend: HTML, CSS, and JS for the frontend. Try to primarily use React and Tailwind. (Talked with Dad, he said that React makes things more complex than needed, and advised using HTMX instead)

Backend: Python, JS. Try to primarily use Node.js. (Ideas, mostly. Learn more about backend processes!)

## Notes

### Frontend

#### React.js

React components are functions that return markup text. You can also next them once they're declared.

```javascript
function MyButton() {
    return (
        <button>I'm a button</button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}
```

Note: React components such as ```MyButton``` start with a capitalized letter to help distinguish them from standard functions or tags. All HTML tags must be lowercase. :D

MDN and javascript.info are great resources to learn about JavaScript syntax! React uses a markup style known as JSX. It's optional, but all of the tools made for React support JSX. JSX is a bit stricter than HTML. You have to close tags like ```<br />```. You also can't use more than one container, and you have to wrap them in a parent, such as a ```<div>...</div>``` or ```<>...</>``` (See below)

```javascript
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    )
}
```

With React, you can use ```className``` to specify a CSS class just like the HTML attribute. 

```javascript
<img className='avatar' />
```

Traditionally, you could then write the CSS in a seperate file like below.

```css
.avatar {
    border-radius: 50%;
}
```

Then, you'd add CSS files using a ```<link>``` tag in HTML. If you use a tool or framework, check its documentation on how to add CSS to that project!

Just as JSX lets you put markup into JavaScript, the curly braces ```{}``` let you slip back into JavaScript to work with your variables and display it for the user. If you want to use inline CSS, just use one set of curly braces. the second set shown in the example below is just to use JavaScript variables in the styling.

```javascript
const user = {
    name: 'John Doe', 
    imageUrl: '',
    imageSize: 90,
}

export default function Profile() {
    return (
    <>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize, height: user.imageSize}}
      />
    </>
  )
}
```

Conditional rendering in React does not use any special syntax. 

#### Tailwind

#### HTMX

The main idea of HTMX is focusing on 'Hypermedia Systems' instead of JavaScript to create interactivity.

### Frontend Integration

When styling React compoenents using Tailwind, just insert the utility classes into the ```className``` attribute within the JSX inside of the compoenent like below.

```javascript
function TailwindReactButton() {
    return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Click Me!
        </button>
    )
}
```

#### Node.js

## Tools

[HTML to JSX converter](https://transform.tools/html-to-jsx) provided by the React documentation.

## Documentation Links

[React.js](react.dev/learn) - Learn how to use React.

[TailwindCSS](tailwindcss.com) - Use more complex CSS with less effort and without leaving your markup.

## Links for Later Use

[React Native](reactnative.dev)

[Ktor](ktor.io)
