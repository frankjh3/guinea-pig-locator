import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class SubmissionModal extends Component {
  render() {
    let modal;
    if (this.props.confirmationMode === 0) {
      return null;
    } else if (this.props.confirmationMode === 1) {
      modal = (
        <Modal show={true} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submission successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Congratulations! You will be notified by people interested in
            adopting your guinea pigs. Click below to return home (and refresh
            the page to view your listing).
          </Modal.Body>
          <Modal.Footer>
            <Link
              className="btn-md btn-primary"
              to="/"
              style={{ padding: "4px" }}
            >
              Click to return home
            </Link>
          </Modal.Footer>
        </Modal>
      );
    } else {
      modal = (
        <Modal show={true} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submission failed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please try again. Make sure all fields have been entered. If the
            problem persists, please contact an administrator.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Return to submission
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }

    return <React.Fragment>{modal}</React.Fragment>;
  }
}

export default SubmissionModal;
