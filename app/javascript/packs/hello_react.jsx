// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

// // document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('turbolinks:load', () => {
  console.log("rendering react")
  ReactDOM.render(
    <Hello name="Brendan" time={new Date().toString()} />,
    document.body.appendChild(document.createElement('div')),
  )
})
