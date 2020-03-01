import React, { Component } from "react";
import Modal from "react-responsive-modal";
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      doneTasks: [],
      tittle: "",
      time: "",
      act: 0,
      index: 0,
      renderTasks: 1,
      color: ""
    };
    
  }
  onOpenModaltask1 = () => {
    this.setState({ task1: true });
  };
  onCloseModalclose = () => {
    this.setState({ task1: false });
  };
  uniqueId = () => {
    return (
      "id-" +
      Math.random()
        .toString(36)
        .substr(2, 16)
    );
  };

  inputChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      color: e.target.value
    });
    console.log("hi" , name ,"v", value);
  };

  submitTask = e => {
    e.preventDefault();
    console.log("tes");
    console.log(this.state);
    let { tasks, tittle, color, time, act, index } = this.state;

    if (act === 0) {
      let task = {
        tittle,
        time,
        color,
        id: this.uniqueId()
      };
      tasks.push(task);
    } else {
      tasks[index].tittle = tittle;
      tasks[index].time = time;
      tasks[index].color = color;
    }

    this.setState({
      tasks,
      tittle: "",
      time: "",
      color: "",
      act: 0
    });
  };

  viewDateTime = dt => {
    dt = dt.split("T");

    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var d = new Date(dt[0]);
    var n = d.toLocaleDateString(["en-US"], options);

    return `${n} `;
  };

  taskDone = i => {
    let { doneTasks, tasks } = this.state;

    doneTasks.push(tasks[i]);

    tasks.splice(i, 1);

    this.setState({
      doneTasks,
      tasks
    });
  };

  removeDone = i => {
    let { doneTasks } = this.state;
    doneTasks.splice(i, 1);
    this.setState({
      doneTasks
    });
  };

  unDone = i => {
    let { doneTasks, tasks } = this.state;
    tasks.push(doneTasks[i]);
    this.removeDone(i);
  };

  render() {
    let {
      task1,
      tasks,
      tittle,
      time,
      doneTasks,
      renderTasks,
    } = this.state;

    return (
      <>
        <div>
          <div className="sidebar">
            <ul>
              <li>
                <div tabIndex={0} role="button" onClick={this.onOpenModaltask1}>
                  <span>➕ task</span>
                </div>
              </li>
              <li>
                <div tabIndex={0} role="button">
                  <span>
                    <input
                      type="text"
                      className="  plus"
                      placeholder="Search..."
                    />
                  </span>
                </div>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 1,
                      
                    });
                  }}
                >
                  <div tabIndex={0} role="button">
                    <span>📨</span>
                    <span>Inbox ( {tasks.length} )</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 2,
                      
                    });
                  }}
                >
                  <div tabIndex={0} role="button">
                    <span>✅</span>
                    <span>Completed ( {doneTasks.length} )</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 3,
                      
                    });
                  }}
                >
                  <div tabIndex={0} role="button">
                    <span class="labelstyle">🔴</span>
                    <span>Red</span>
                  </div>
                </a>
              </li>
              <li>
              <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 4,
                      
                    });
                  }}
                >
                <div tabIndex={0} role="button">
                  <span class="labelstyle">🟢</span>
                  <span>Green</span>
                </div>
                </a>
              </li>
              <li>
              <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 5,
                      
                    });
                  }}
                >
                <div tabIndex={0} role="button">
                  <span class="labelstyle">🔵</span>
                  <span>Blue</span>
                </div>
                </a>
              </li>
              <li>
              <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 6,
                      
                    });
                  }}
                >
                <div tabIndex={0} role="button">
                  <span class="labelstyle">🟣</span>
                  <span>Purple</span>
                </div>
                </a>
              </li>
              <li>
              <a
                  onClick={() => {
                    this.setState({
                      renderTasks: 7,
                      
                    });
                  }}
                >
                <div tabIndex={0} role="button">
                  <span class="labelstyle">🟡</span>
                  <span>Yellow</span>
                </div>
                </a>
              </li>
            </ul>
          </div>
          {/* TODO LIST */}
          <div class="contentTask">
            {renderTasks === 1 &&
              tasks.map((data, i) => (
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.taskDone(i)}>
                              <span> ✅</span>
                            </a>
                            <br />
                            <small>{data.color}</small>
                            <br />
                          </p>
                        </div>
                        <nav></nav>
                      </div>
                    </article>
                  </div>
                </div>
              ))}

            {renderTasks === 2 &&
              doneTasks.map((data, i) => (
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.unDone(i)}>
                              <span> 🔙</span>
                            </a>
                            <button onClick={() => this.removeDone(i)}>
                              🗑️
                            </button>
                            <br />
                            <small>{data.color}</small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            {renderTasks === 3 &&
              tasks.map((data, i) => (
                data.color=="🔴Red"&&
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.taskDone(i)}>
                              <span> ✅</span>
                            </a>
                            <br />
                            {data.color}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
       
        {renderTasks === 4 &&
              tasks.map((data, i) => (
                data.color=="🟢Green"&&
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.taskDone(i)}>
                              <span> ✅</span>
                            </a>
                            <br />
                            {data.color}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
               {renderTasks === 5 &&
              tasks.map((data, i) => (
                data.color=="🔵Blue"&&
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.taskDone(i)}>
                              <span> ✅</span>
                            </a>
                            <br />
                            {data.color}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
                {renderTasks === 6 &&
              tasks.map((data, i) => (
                data.color=="🟣Purple"&&
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.taskDone(i)}>
                              <span> ✅</span>
                            </a>
                            <br />
                            {data.color}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
               {renderTasks ===7 &&
              tasks.map((data, i) => (
                data.color=="🟡Yellow"&&
                <div key={i}>
                  <div>
                    <article>
                      <div>
                        <div>
                          <p>
                            <small>{this.viewDateTime(data.time)}</small>
                            <br />
                            <strong>{data.tittle}</strong>
                            <a onClick={() => this.taskDone(i)}>
                              <span> ✅</span>
                            </a>
                            <br />
                            {data.color}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
          </div>
        </div>
      

        <Modal open={task1} onClose={this.onCloseModalclose} class="model">
          <form method="post" action="./index.html" class="model">
            <div>
              <div>
                <input
                  type="text"
                  name="tittle"
                  placeholder="Enter New Task"
                  value={tittle}
                  onChange={e => this.inputChange(e)}
                />
              </div>
            </div>
            <br />
            <div>
              <div>
                <input
                  type="date"
                  name="time"
                  value={time}
                  onChange={e => this.inputChange(e)}
                />
              </div>
            </div>
            <br />

            <strong>Select Color:</strong>

            <ul class="radio">
              <li>
                <label>
                  <input
                    type="radio"
                    value="🔴Red"
                    checked={this.state.color === "🔴Red"}
                    onChange={this.onRadioChange}
                    onChange={e => this.inputChange(e)}
                  />
                  <span>🔴Red</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="🟢Green"
                    checked={this.state.color === "🟢Green"}
                    onChange={this.onRadioChange}
                    onChange={e => this.inputChange(e)}
                  />
                  <span>🟢Green</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="🔵Blue"
                    checked={this.state.color === "🔵Blue"}
                    onChange={this.onRadioChange}
                    onChange={e => this.inputChange(e)}
                  />
                  <span>🔵Blue</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="🟣Purple"
                    checked={this.state.color === "🟣Purple"}
                    onChange={this.onRadioChange}
                    onChange={e => this.inputChange(e)}
                  />
                  <span>🟣Purple</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="🟡Yellow"
                    checked={this.state.color === "🟡Yellow"}
                    onChange={this.onRadioChange}
                    onChange={e => this.inputChange(e)}
                  />
                  <span> 🟡Yellow</span>
                </label>
              </li>
            </ul>
            <br />
            <button
              className="button is-info"
              type="submit"
              onClick={e => this.submitTask(e)}
            >
              Add
            </button>
          </form>
        </Modal>
      </>
    );
  }
}

export default Todolist;
