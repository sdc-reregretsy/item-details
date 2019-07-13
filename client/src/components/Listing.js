import React from 'react';
import Title from './Title.js';
import Details from './Details.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Hardcoded itemData that corresponds to hardcoded photo for initial state
      item_id: 719445611,
      title: 'Vintage Garden Book (1968)',
      description:
        'Better Homes and Gardens’ NEW GARDEN BOOK. Item is in excellent condition filled with beautiful vintage photos and excellent gardening tips. Such a dreamy housewarming gift! \n\nPublished in New York by Meredith Corporation 1968.',
      price: '16.00',
      quantity: 1,
      seller: 'annielesperance',
      avgRating: 3
    };

    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
    // Render random item when page refreshes
    const ids = [
      81814051,
      95525599,
      156698406,
      192043201,
      229690062,
      250210237,
      251875541,
      266800276,
      294523241,
      387609724,
      471994052,
      477367545,
      483226155,
      492830503,
      494429446,
      495714238,
      503202956,
      526716567,
      539684503,
      539773739,
      549091140,
      563144227,
      564571125,
      568885963,
      569143841,
      573081262,
      575896704,
      582878765,
      585192650,
      586414372,
      590644735,
      590736934,
      591749912,
      592953142,
      594193748,
      595435134,
      615323932,
      615522908,
      615793374,
      619203265,
      631415799,
      632855773,
      633905558,
      635333355,
      642244040,
      643366643,
      644679516,
      645238286,
      650884544,
      664095876,
      664147439,
      665514126,
      665847970,
      666022574,
      668870898,
      672364753,
      674905924,
      675323094,
      676539898,
      683199142,
      684581264,
      687067299,
      687552734,
      689079899,
      689171821,
      695865940,
      696110752,
      701674987,
      703797171,
      705585130,
      705588518,
      705588554,
      705588604,
      705588638,
      705588706,
      705588756,
      705921784,
      706474050,
      706474076,
      706474098,
      706474148,
      706474154,
      710448049,
      714225313,
      718478657,
      718746201,
      719444563,
      719444651,
      719445263,
      719445367,
      719445611,
      720031167,
      720201609,
      720333151,
      720333803,
      720333827,
      720333829,
      720333943,
      720333947,
      720334099
    ];

    let id = ids[Math.floor(Math.random() * (101 - 1)) + 1];
    this.fetchItem(719445611);
  }

  fetchItem(id) {
    axios
      .get(`/details/${id}`)
      .then(response => {
        console.log('fetchItem: ', response.data[0]);
        this.setState({
          item_id: response.data[0].listing_id,
          title: response.data[0].title,
          description: response.data[0].description,
          price: response.data[0].price,
          quantity: response.data[0].quantity,
          seller: response.data[0].seller,
          avgRating: response.data[0].avgRating
        });
      })
      .catch(err => console.log('error in fetchItem: ', err));
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <Image
                src='https://i.etsystatic.com/19866202/r/il/9db3c0/1981665817/il_fullxfull.1981665817_mjym.jpg'
                fluid
              />
            </Col>
            <Col lg={4}>
              <Title
                seller={this.state.seller}
                title={this.state.title}
                price={this.state.price}
              />
              <Details description={this.state.description} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Listing;
