// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

// // document.addEventListener('DOMContentLoaded', () => {
// Make sure the app is reloaded when turbolinks loads the page
document.addEventListener('turbolinks:load', () => {
  const date = new Date()

  console.log(`rendering hello_react at: ${date}`)

  const helloDiv = document.getElementById("hello_react");
  if (helloDiv != null) {
    ReactDOM.render(
      <Hello name="Brendan" date={date.toString()} />,
      helloDiv
    )
  }
})
