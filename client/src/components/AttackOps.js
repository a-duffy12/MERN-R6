import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class AttackOps extends Component {
  state = {
    // hard coded team members, eventually will have all options in DB and user will choose 5
    attackers: [
      {
        id: uuid(),
        name: "Sledge",
        side: "attack",
        frag: "3.5",
        destruction: "4",
        disruption: "2",
        counter: "6",
        hardBreach: "0"
      },
      {
        id: uuid(),
        name: "Thatcher",
        side: "attack",
        frag: "2.5",
        destruction: "1",
        disruption: "5",
        counter: "24",
        hardBreach: "0"
      },
      {
        id: uuid(),
        name: "Zofia",
        side: "attack",
        frag: "3",
        destruction: "2",
        disruption: "3",
        counter: "7",
        hardBreach: "0"
      },
      {
        id: uuid(),
        name: "Thermite",
        side: "attack",
        frag: "2",
        destruction: "1",
        disruption: "1",
        counter: "2",
        hardBreach: "3"
      },
      {
        id: uuid(),
        name: "Iq",
        side: "attack",
        frag: "3.5",
        destruction: "1",
        disruption: "2",
        counter: "9",
        hardBreach: "0"
      }
    ]
  };

  // rendering the CSS (appearance) of the attacking op list
  render() {
    const { attackers } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginTop: "4rem" }}
          onClick={() => {
            // button to add a new attacker to the team
            const name = prompt("Choose an attacking operator");
            if (name) {
              // make it so that if the enetered attacker is in the database, the attacker is added
              this.setState(state => ({
                attackers: [
                  ...state.attackers,
                  {
                    id: uuid(),
                    name
                  }
                ]
              }));
            }
          }}
        >
          Add Attacker
        </Button>
        <ListGroup>
          <TransitionGroup className="attack-team">
            {attackers.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState({
                        attackers: this.state.attackers.filter(
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

export default AttackOps;
