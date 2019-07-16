import React from 'react';
import { Container, Row, Button, Collapse } from 'react-bootstrap';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReadMore: !open,
      clickedReadMore: false
    };

    this.toggleShowReadMore = this.toggleShowReadMore.bind(this);
    this.handleClickonReadMore = this.handleClickonReadMore.bind(this);
  }

  toggleShowReadMore() {
    this.setState({
      showReadMore: !this.state.readMore
    });
  }

  handleClickonReadMore() {
    this.setState({
      clickedReadMore: !this.state.clickedReadMore
    });
  }

  render() {
    const props = this.props;
    let truncateText;
    let descriptionText;
    let readMoreText;
    if (this.props.description.length > 500) {
      truncateText = props.description;
      descriptionText = truncateText.slice(0, 500);
      readMoreText = truncateText.slice(500);
    }

    return (
      <div>
        <div className='itemDetailsBox'>
          <hr />
          <h1 className='itemDetails'>Item details</h1>
          <div>
            {props.description.length < 500 && (
              <div className='description'> {props.description}</div>
            )}
            {props.description.length > 500 && (
              <div>
                <div className='readMoreText'> {descriptionText}</div>
                <Button
                  onClick={this.toggleShowReadMore}
                  aria-controls='example-collapse-text'
                  aria-expanded={open}
                  variant='Link'
                  className='learnMore'
                >
                  + Learn more about this item
                </Button>
                <Collapse in={this.state.showReadMore}>
                  <div className='description'> {readMoreText}</div>
                </Collapse>
              </div>
            )}
          </div>
        </div>
        <hr />
        <h1 className='shipping'>Shipping & policies</h1>
        <div className='shippingInfo'>
          <div>
            Get it fast! Ready to ship in 1–2 business days.
            <br />
            From United States
          </div>
          <p>No returns or exchanges</p>
          <p>But please contact me if you have any problems with your order.</p>
          <a href='#'>Get shipping cost</a>
          <br />
          <a href='#'>View shop policies</a>
        </div>
        <hr />
      </div>
    );
  }
}
export default Details;
