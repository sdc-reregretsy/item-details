import React from 'react';
import Title from './Title.js';
import Details from './Details.js';
import ImageCarousel from './ImageCarousel.js';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.bc = new BroadcastChannel('regretfully');

    this.state = {
      item_id: null,
      title: '',
      description: '',
      price: '',
      quantity: 0,
      sellerName: '',
      sellerHandle: '',
      sellerAvatar: '',
      avgRating: 0,
      cartImage: '',
      mainImage: ''
    };

    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
    // Render random item when page refreshes
    // const ids = [
    //   81814051,
    //   95525599,
    //   156698406,
    //   192043201,
    //   229690062,
    //   250210237,
    //   251875541,
    //   266800276,
    //   294523241,
    //   387609724,
    //   471994052,
    //   477367545,
    //   483226155,
    //   492830503,
    //   494429446,
    //   495714238,
    //   503202956,
    //   526716567,
    //   539684503,
    //   539773739,
    //   549091140,
    //   563144227,
    //   564571125,
    //   568885963,
    //   569143841,
    //   573081262,
    //   575896704,
    //   582878765,
    //   585192650,
    //   586414372,
    //   590644735,
    //   590736934,
    //   591749912,
    //   592953142,
    //   594193748,
    //   595435134,
    //   615323932,
    //   615522908,
    //   615793374,
    //   619203265,
    //   631415799,
    //   632855773,
    //   633905558,
    //   635333355,
    //   642244040,
    //   643366643,
    //   644679516,
    //   645238286,
    //   650884544,
    //   664095876,
    //   664147439,
    //   665514126,
    //   665847970,
    //   666022574,
    //   668870898,
    //   672364753,
    //   674905924,
    //   675323094,
    //   676539898,
    //   683199142,
    //   684581264,
    //   687067299,
    //   687552734,
    //   689079899,
    //   689171821,
    //   695865940,
    //   696110752,
    //   701674987,
    //   703797171,
    //   705585130,
    //   705588518,
    //   705588554,
    //   705588604,
    //   705588638,
    //   705588706,
    //   705588756,
    //   705921784,
    //   706474050,
    //   706474076,
    //   706474098,
    //   706474148,
    //   706474154,
    //   710448049,
    //   714225313,
    //   718478657,
    //   718746201,
    //   719444563,
    //   719444651,
    //   719445263,
    //   719445367,
    //   719445611,
    //   720031167,
    //   720201609,
    //   720333151,
    //   720333803,
    //   720333827,
    //   720333829,
    //   720333943,
    //   720333947,
    //   720334099
    // ];

    // let id = ids[Math.floor(Math.random() * (101 - 1)) + 1];
    this.fetchItem(720334099);
    // this.bc.postMessage(id);
  }

  fetchItem(id) {
    axios
      .get(
        `http://regretsy-item-details.us-east-2.elasticbeanstalk.com/details/${id}`
      )
      .then(response => {
        console.log('Fetched item: ', response.data[0]);
        this.setState({
          item_id: response.data[0].listing_id,
          title: response.data[0].title,
          description: response.data[0].description,
          price: response.data[0].price,
          quantity: response.data[0].quantity,
          sellerName: response.data[0].sellerName,
          sellerHandle: response.data[0].sellerUsername,
          sellerAvatar: response.data[0].sellerAvatar,
          avgRating: response.data[0].avgRating,
          cartImage: response.data[0].cartImage,
          mainImage: response.data[0].mainImage
        });
      })
      .catch(err => console.log('error in fetchItem: ', err));
  }

  render() {
    this.bc.onmessage = ev => {
      console.log('Incoming listing_id: ', ev.data);
      this.fetchItem(ev.data);
    };

    return (
      <div>
        <Container>
          <Title
            sellerName={this.state.sellerName}
            sellerHandle={this.state.sellerHandle}
            sellerAvatar={this.state.sellerAvatar}
            title={this.state.title}
            price={this.state.price}
            avgRating={this.state.avgRating}
            cartImage={this.state.cartImage}
          />
          <Details description={this.state.description} />
        </Container>
      </div>
    );
  }
}
export default Listing;
