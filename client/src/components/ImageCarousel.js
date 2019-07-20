import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: ''
    };
  }

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <Image className='d-block w-100' src={this.props.mainImage} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/1a3aaa/1985500853/il_fullxfull.1985500853_hgoo.jpg'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/70ac66/1985501247/il_fullxfull.1985501247_7xqb.jpg'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/ab93eb/1937963934/il_fullxfull.1937963934_7pc2.jpg'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/3e5303/1985501165/il_fullxfull.1985501165_cayy.jpg'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/2dad28/1937963852/il_fullxfull.1937963852_k4nb.jpg'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/a669d1/1937963854/il_fullxfull.1937963854_o03m.jpg'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.etsystatic.com/13975772/r/il/a880e2/1985501095/il_fullxfull.1985501095_5dfl.jpg'
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default ImageCarousel;
