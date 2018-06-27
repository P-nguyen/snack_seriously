import React, {Component} from 'react';
import '../assets/css/singleresult.css'
import picture from '../assets/images/dummypics/boxglutenfree.png';
import {Link} from 'react-router-dom';

class SingleResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="singleResultContainer">
                    <img src={picture} className="singleResultImage"/>
                <div className="footerButtons resultFooter">
                    <div type='button' className='btnStyle btnNormal' id="resultButtons">Nutrition Facts</div>
                    <div type='button' className='btnStyle btnNormal'id="resultButtons">Ingredients</div>
                </div>
                <div className='footerButtons'>
                    <Link to='/MultipleResult'><div type='button' className='btnStyle btnNormal'>&#8592; Back</div></Link>
                    <Link to='/'><div type='button' className='btnStyle btnNormal'>Home &#8962;</div></Link>
                </div>
            </div>
            )
    }
}

export default SingleResult;