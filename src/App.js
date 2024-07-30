import "./normal.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>

      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
                  <div className="Avatar-me">
                    Me
                  </div>
                  <div className="message">
                    Hello World
                  </div>
            </div>
          </div>

          <div className="chat-message chatgpt">
            <div className="chat-message-center">
                  <div className="Avatar-ai">
                    AI
                  </div>
                  <div className="message">
                    Hello, I am C3PO human cyborg relations, how can I help you?
                  </div>
            </div>
          </div>
        </div>

        <div className="chat-input-holder">
          <textarea
            rows="1"
            className="chat-input-textarea"
            placeholder="Type your message to Blallen here"
          ></textarea>
        </div>
      </section>
    </div>
  )
}

export default App
