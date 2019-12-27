import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class DefenseOps extends Component {
  state = {
    // hard coded team members, eventually will have all options in DB and user will choose 5
    defenders: [
      {
        id: uuid(),
        name: "Smoke",
        side: "defense",
        frag: "2.5",
        destruction: "3",
        disruption: "4",
        counter: "4",
        intel: "0"
      },
      {
        id: uuid(),
        name: "Maestro",
        side: "defense",
        frag: "4",
        destruction: "2",
        disruption: "2",
        counter: "4",
        intel: "2"
      },
      {
        id: uuid(),
        name: "Jager",
        side: "defense",
        frag: "3.5",
        destruction: "0",
        disruption: "3",
        counter: "6",
        intel: "1"
      },
      {
        id: uuid(),
        name: "Valkyrie",
        side: "defense",
        frag: "3",
        destruction: "1",
        disruption: "1",
        counter: "1",
        intel: "3"
      },
      {
        id: uuid(),
        name: "Bandit",
        side: "defense",
        frag: "3.5",
        destruction: "0",
        disruption: "2",
        counter: "6",
        intel: "0"
      }
    ]
  };

  // rendering the CSS (appearance) of the attacking op list
  render() {
    const { defenders } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginTop: "4rem" }}
          onClick={() => {
            // button to add a new attacker to the team
            const name = prompt("Choose a defending operator");
            if (name) {
              // make it so that if the enetered attacker is in the database, the attacker is added
              this.setState(state => ({
                defenders: [
                  ...state.defenders,
                  {
                    id: uuid(),
                    name
                  }
                ]
              }));
            }
          }}
        >
          Add Defender
        </Button>
        <ListGroup>
          <TransitionGroup className="defense-team">
            {defenders.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState({
                        defenders: this.state.defenders.filter(
                          op => op.id !== id
                        )
                      });
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default DefenseOps;
