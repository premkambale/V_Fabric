import React, { useEffect, useState } from 'react'
import './NewArrivals.css'
import { CiFilter } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { CgDisplayGrid } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import product from '../../../../../assets/product.png'
import loaderImg from '../../../../../../src/assets/loader.svg'
import Modal from 'react-modal';

const NewArrivals = () => {


    const newArrivalsData = [

        {
            img: product,
            label: 'BL Fabric',
            productName: 'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400',
            price: `${10, 999}`,
            discountPrice: `${3, 699.00}`,
            productDesc: 'Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...'
        },
        {
            img: product,
            label: 'BL Fabric',
            productName: 'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400',
            price: `${10, 999}`,
            discountPrice: `${3, 699.00}`,
            productDesc: 'Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...'
        }
        ,
        {
            img: product,
            label: 'BL Fabric',
            productName: 'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400',
            price: `${10, 999}`,
            discountPrice: `${3, 699.00}`,
            productDesc: 'Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...'
        },
        {
            img: product,
            label: 'BL Fabric',
            productName: 'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400',
            price: `${10, 999}`,
            discountPrice: `${3, 699.00}`,
            productDesc: 'Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...'
        },
        {
            img: product,
            label: 'BL Fabric',
            productName: 'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400',
            price: `${10, 999}`,
            discountPrice: `${3, 699.00}`,
            productDesc: 'Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...'
        },
        {
            img: product,
            label: 'BL Fabric',
            productName: 'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400',
            price: `${10, 999}`,
            discountPrice: `${3, 699.00}`,
            productDesc: 'Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...'
        }
    ]

    const [loader, setLoader] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [loader])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [showProductFilter, setShowProductFilter] = useState({
        grid: false,
        twoGrid: true,
        threeGrid: false
    })

    const gridHandler = (val) => {
        const falsyval = {
            grid: false,
            twoGrid: false,
            threeGrid: false
        }
        setShowProductFilter((prev) => ({ ...falsyval, [val]: true }))
    }
    console.log('showProductFilter', showProductFilter)
    return (
        <div className="newArrival-container">
            <div className="bannerHeroContainer">
                <div className="innerBannerHeroContainer">
                    <p>Special Wedding & Party wear Collection</p>
                    <span>Designer Collection of the week</span>
                </div>
            </div>
            <div className="newArrival-product-container">
                <div className="filter-product-bar">
                    <div className="filterIconDiv">
                        <CiFilter color='grey' />
                        <span>Filter</span>
                    </div>
                    <div className="filterBox">
                        <div className="innerFilterBox" onClick={() => gridHandler('grid')}>
                            <MdOutlineMenu size={20} />
                        </div>
                        <div className="innerFilterBox" onClick={() => gridHandler('twoGrid')} >
                            <CgMenuGridR size={20} />
                        </div>
                        <div className="innerFilterBox" onClick={() => gridHandler('threeGrid')}>
                            <CgDisplayGrid size={20} />
                        </div>
                        <div className="innerFilterBox">
                            <MdOutlineMenu size={20} />
                        </div>
                    </div>
                    <div className="priceFilterContainer">
                        <div className="innnerPriceFilterContainer">
                            <span>Date, new to old</span>
                            <FaAngleDown color='grey' />
                        </div>
                    </div>
                </div>
                <div className="mainProductContainer">
                    {
                        showProductFilter.grid ? (
                            <>
                                {
                                    newArrivalsData?.map((item, index) => {
                                        return (
                                            <div className="inner-productContainer">
                                                <div className="product-img-container">
                                                    <img src={item.img} alt="error" />
                                                </div>
                                                <div className="product-info-container">
                                                    <div className='productLabelContainer'>
                                                        <span className='productLabel'>{item?.label}</span>
                                                        <p>{item?.productName}</p>
                                                        <div className='priceBox'>
                                                            <span className=''>MRP.{item.price}</span>
                                                            <span className='discountPrice'>Rs. {item.discountPrice}</span>
                                                        </div>
                                                    </div>
                                                    <div className='product-desc'>
                                                        <p>{item?.productDesc}</p>
                                                    </div>
                                                </div>
                                                <div className="product-actionbtns">
                                                    <button className='quickview-btn'>Quick view</button>
                                                    <button className='addtocart-btn'>Add to cart</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </>
                        ) : showProductFilter.twoGrid ? (
                            <>
                                <div className="innerProductContainer">
                                    {
                                        newArrivalsData?.map((item) => {
                                            return <>
                                                <div className='productContainer' onClick={() => openModal()}>
                                                    <img src={item.img} alt="error" />
                                                    <div className="product-hover-btn">
                                                        <button className='quickview-btn color'>Quick view</button>
                                                        <button className='addtocart-btn'>Add to cart</button>
                                                    </div>
                                                    <div className='discount-banner'>
                                                        <span>66%</span>
                                                    </div>
                                                    <div className='productLabelContainer'>
                                                        <span className='productLabel'>{item?.label}</span>
                                                        <p>{item?.productName}</p>
                                                        <div className='priceBox'>
                                                            <span className=''>MRP. {item.price}</span>
                                                            <span className='discountPrice'>Rs. {item.discountPrice}</span>
                                                        </div>
                                                    </div>
                                                    {
                                                        loader && <div className='loader'>
                                                            <img src={loaderImg} alt="error" />
                                                        </div>
                                                    }

                                                </div>

                                            </>
                                        })
                                    }
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="two-grid-product-container">
                                    {
                                        newArrivalsData?.map((item) => {
                                            return (
                                                <div className='productContainer'>
                                                    <img src={product} alt="error" />
                                                    <div className="product-hover-btn">
                                                        <button className='quickview-btn color'>Quick view</button>
                                                        <button className='addtocart-btn'>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </>
                        )
                    }


                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="productDetail-modal">
                    <div className="productImg">
                        <img src={product} alt="" />
                    </div>
                    <div className="productDetails">
                        <div className="product-info-container">
                            <div className='productLabelContainer'>
                                <span className='productLabel'></span>
                                <p>'Shadding Purple color Sequence & Thread Embroidery work Designer Lehenga Choli for Any Function BL1400'</p>
                                <div className='priceBox'>
                                    <span className=''>MRP.10, 999</span>
                                    <span className='discountPrice'>Rs.1000</span>
                                </div>
                            </div>
                            <div className='product-desc'>
                                <p>Product code : BL1400Lehenga : Shadding Faux Georgette Fabric With Sequence Thread WorkInner : American crept in lehengacholi : Faux Georgette Fabric With Thread Work (unstitch)Duppta : Faux Georgette Fabric...</p>
                            </div>
                        </div>
                        <div className="product-actionbtns">
                            <button className='quickview-btn'>Quick view</button>
                            <button className='addtocart-btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default NewArrivals