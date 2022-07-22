import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>

        <nav className="navbar fixed-top">
            <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
                

                <a className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
                    <img src="images/logo.svg" alt="alternative" className="h-8" />
                </a>

                <button className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                    <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                        <li>
                            <a className="nav-link page-scroll active" href="#header">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#features">Features</a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#details">Details</a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                        </li>
                        <li className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item page-scroll" href="article.html">Article Details</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                            </div>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#download">Download</a>
                        </li>
                    </ul>
                    <span className="block lg:ml-3.5">
                        <a className="no-underline" href="#your-link">
                            <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
                        </a>
                        <a className="no-underline" href="#your-link">
                            <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
                        </a>
                    </span>
                </div>
            </div>
        </nav>

        <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                    <h1 className="h1-large mb-5">Demo Dock's Verifiable Credential technology today</h1>
                    <p className="p-large mb-8">Start getting things done together with your team based on Pavo's revolutionary team management features</p>
                    <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple"></i>Download</a>
                    <a className="btn-solid-lg secondary" href="#your-link"><i className="fab fa-google-play"></i>Download</a>
                </div>
                <div className="xl:text-right">
                    <img src="https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/628ba814a6441ddd0770fc02_Frame%20344.png" loading="lazy" data-w-id="65624ab1-ef62-1eca-0a56-cc192d7a17db" width="650" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 650px" srcset="https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/628ba814a6441ddd0770fc02_Frame%20344-p-500.png 500w, https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/628ba814a6441ddd0770fc02_Frame%20344-p-800.png 800w, https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/628ba814a6441ddd0770fc02_Frame%20344-p-1080.png 1080w, https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/628ba814a6441ddd0770fc02_Frame%20344.png 1300w" alt="" className="dock-wallet-hero-image inline" />
                </div>
            </div> 
        </header> 
       


        <div className="pt-4 pb-14 text-center">
            <div className="container px-4 sm:px-8 xl:px-4">
                <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto"> Team management mobile apps don’t get better than Pavo. It’s probably the best app in the world for this purpose. Don’t hesitate to give it a try today and you will fall in love with it</p>
            </div> 
        </div>



    </>
  )
}
