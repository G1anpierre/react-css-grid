import React, {useRef, useState} from 'react'
import {useOnClickOutside} from 'usehooks-ts'
import './style-main.css'
import blocks from './image/blocks.jpg'
import fjord from './image/fjord.jpg'
import grass from './image/grass.jpg'
import lines from './image/lines.jpg'
import nerve from './image/nerve.jpg'
import tree from './image/tree.jpg'

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClickOutside = () => {
    setOpen(false)
  }

  const wrapperRef = useRef(null)

  const stateModal = open ? 'reveal' : ''

  useOnClickOutside(wrapperRef, handleClickOutside)

  return (
    <div className={`App ${stateModal}`}>
      <header className="masthead">
        <h1 className="site-title">Slide-over off-canvas navigation</h1>
      </header>

      <section className="main-nav" ref={wrapperRef}>
        <button className="trigger" aria-expanded="false" onClick={handleOpen}>
          Menu<span className="screen-reader-text">Reveal menu</span>
        </button>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
            <li>
              <a href="/">Tutorials</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </section>

      <main id="content" className="main-area">
        <ul className="cards">
          <li className="card-item double">
            <a href="/">
              <figure className="card">
                <img src={lines} alt="Lines on a tropical leaf." />
                <figcaption className="caption">
                  <h3 className="caption-title">Lines of Growth</h3>
                  <p>
                    Everything that grows creates lines; the abstract telling of
                    the story of a life.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={nerve} alt="Leaves of the Nerve Plant." />
                <figcaption className="caption">
                  <h3 className="caption-title">Pattern Recognition</h3>
                  <p>
                    Human beings are hard-wired to look for patterns in all
                    things.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img
                  src={tree}
                  alt="The silhouette of a tree during sundown."
                />
                <figcaption className="caption">
                  <h3 className="caption-title">In the Field</h3>
                  <p>
                    Did you know the word "silhouette" is the last name of a
                    French 18th century politician?
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={blocks} alt="classNameic wooden letter blocks." />
                <figcaption className="caption">
                  <h3 className="caption-title">Spelling the Future</h3>
                  <p>
                    Long before they made colourful plastic bricks they made
                    toys from hardwood.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={fjord} alt="Sundown over the Oslo fjord." />
                <figcaption className="caption">
                  <h3 className="caption-title">Water, Earth, and Sky</h3>
                  <p>
                    For some, water is a means of bodily sustenance. For others,
                    it's a medium of transportation.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={grass} alt="A baby sits on a carpet in the grass." />
                <figcaption className="caption">
                  <h3 className="caption-title">Flying Carpet</h3>
                  <p>
                    Looking at this photo it's easy to see how the idea of a
                    flying carpet came about.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={lines} alt="Lines on a tropical leaf." />
                <figcaption className="caption">
                  <h3 className="caption-title">Lines of Growth</h3>
                  <p>
                    Everything that grows creates lines; the abstract telling of
                    the story of a life.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item double">
            <a href="/">
              <figure className="card">
                <img src={nerve} alt="Leaves of the Nerve Plant." />
                <figcaption className="caption">
                  <h3 className="caption-title">Pattern Recognition</h3>
                  <p>
                    Human beings are hard-wired to look for patterns in all
                    things.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img
                  src={tree}
                  alt="The silhouette of a tree during sundown."
                />
                <figcaption className="caption">
                  <h3 className="caption-title">In the Field</h3>
                  <p>
                    Did you know the word "silhouette" is the last name of a
                    French 18th century politician?
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={blocks} alt="classNameic wooden letter blocks." />
                <figcaption className="caption">
                  <h3 className="caption-title">Spelling the Future</h3>
                  <p>
                    Long before they made colourful plastic bricks they made
                    toys from hardwood.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={fjord} alt="Sundown over the Oslo fjord." />
                <figcaption className="caption">
                  <h3 className="caption-title">Water, Earth, and Sky</h3>
                  <p>
                    For some, water is a means of bodily sustenance. For others,
                    it's a medium of transportation.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="card-item">
            <a href="/">
              <figure className="card">
                <img src={grass} alt="A baby sits on a carpet in the grass." />
                <figcaption className="caption">
                  <h3 className="caption-title">Flying Carpet</h3>
                  <p>
                    Looking at this photo it's easy to see how the idea of a
                    flying carpet came about.
                  </p>
                </figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </main>

      <section className="sidebar">
        <aside className="twin">
          <h2 className="content-title">Grid lets you do unusual things</h2>
          <p>
            Creating this layout, where two items share the total available
            viewport width evenly alongside full-width and centered content, is
            suprisingly complex if you don't have CSS Grid available.
          </p>
        </aside>
        <aside className="twin">
          <h2 className="content-title">Grid requires a rethink</h2>
          <p>
            Seeing this layout you may still think it's better to just use old
            methods with auto-margins and max-widths. And you <em>can</em>, but
            looking at the CSS you'll see the Grid approach is both cleaner and
            easier to understand.
          </p>
        </aside>
      </section>

      <footer className="colophon">
        <aside>
          All photos:{' '}
          <a href="https://twitter.com/mor10" target="_blank" rel="nofollow">
            Morten Rand-Hendriksen
          </a>
          .
        </aside>
        <aside>
          For more information, visit{' '}
          <a
            href="https://linkedin.com/learning"
            target="_blank"
            rel="nofollow"
          >
            LinkedIn Learning
          </a>
          .
        </aside>
      </footer>
    </div>
  )
}

export default App
