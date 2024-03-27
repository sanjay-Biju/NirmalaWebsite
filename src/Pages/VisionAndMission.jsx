import React from 'react'
import { Navbar, Container, Form, Nav, Button } from 'react-bootstrap'


const VisionAndMission = () => {
    return (
        <>
            <Navbar className='main-nav-box'>
                <Container >
                    <div className='nav-box-1'></div>
                    <div className='nav-box-2'>
                        <Nav >
                            <Nav.Link href="#home" style={{ color: 'white', fontFamily: '-moz-initial' }} >Admission</Nav.Link>
                            <Nav.Link href="#features" style={{ color: 'white', fontFamily: '-moz-initial' }}>Login</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white', fontFamily: '-moz-initial' }}>Library</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white', fontFamily: '-moz-initial' }}>360</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white', fontFamily: '-moz-initial' }}>Library</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white', fontFamily: '-moz-initial' }}>Media Lab</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: 'white', fontFamily: '-moz-initial' }}>Alumini </Nav.Link>
                        </Nav>
                    </div>
                    <div className='nav-box-1'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="What can we help you find..?"
                                style={{ fontSize: '12px', fontFamily: 'inherit', border: '2px solid' }}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" style={{ width: "90px", height: '40px', border: 'none' }}>Search</Button>
                        </Form>
                    </div>
                </Container>
            </Navbar>
            <div>                                {/*  navbars */}
                <Container>
                </Container>
                <Navbar expand="lg" className="bg-body-tertiary " style={{ width: '100%', height: '60px' }}>
                    <Container >
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style' type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Nirmala at a glance
                            </button >
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="drop-down-style dropdown-item " href="#">About Nirmala</a></li>
                                <li><a class="dropdown-item drop-down-style " href="#">History </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Vision And MiSSion</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Core Values</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">  Principal's Desk</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Code of Conduct</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Governing Body</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Staff Council</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">RTI Declaration</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style'
                                type="button"
                                style={{ backgroundColor: '' }}
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Academics
                            </button>
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item drop-down-style" href="#">Department</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Programs</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Academic Calender</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Learning Outcomes</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Result Analysis</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Internal Evaluation</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown"><h3 style={{ fontFamily: 'serif' }}>NIRMALA COLLEGE</h3></div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style' type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                IQAC
                            </button>
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item drop-down-style" href="#">IQAC Profile</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IQAC Strategic Plan</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IQAC Composition</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">AQAR And Annual Reports</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IQAC Initiatives</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IQAC Politics</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Adult Practices</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IQAC minutes And ATR</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">NAAC Sponsored National Seminar-2019</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Best Practices</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Institutional Distinctivness </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Institutional performance </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IIQA Understanding </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Curriculum Feedback</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style' type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Research
                            </button>
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item drop-down-style" href="#">Research Centers</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Research Policy</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Ph.D Alumini</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Code of Ethics</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Publication Division-NARP</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Facualty publication in Journals </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Science & Society</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Institutional Innovation Council</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IPR Cell</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                    </Container>
                </Navbar>
                <Navbar expand="lg" className='third-navbar'>
                    <Container>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style-2' type="button"
                                id="dropdownMenuButton"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                aria-expanded="false"
                            >
                                Campus Life
                            </button>
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item drop-down-style " href="#">Student Union</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Swachh Nirmala</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Clubs nd Cells</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">ICC And Other Communities</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Grievence Redresel Portal </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Capacity Building And Skill Enhancement</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Placement Cell</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Scholarship</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">NSS </a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">NCC</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Edowmwnt Awards</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style-2' type="button"
                                id="dropdownMenuButton"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                aria-expanded="false"
                            >
                                Facilities
                            </button>
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item drop-down-style" href="#">Library</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">ICT Platform</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">civil Service Academy</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">IGNOU</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Hostels</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Yoga Center</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Labs</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Canteen</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Health Center</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Botanical Garden</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Media Lab</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Divyanjgan Facilities</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#">


                        </Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style-2' type="button"
                                id="dropdownMenuButton"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                aria-expanded="false"
                            >
                                Virtual Classsroom
                            </button>
                            <ul class="dropdown-menu drop-down-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item drop-down-style" href="#">MOOC</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Online Resourses</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Online Question Bank</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Old University Question Papers</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">LMS</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">PowerPoint Presentation</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Excel File Application</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Video Lectures</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#">Webinars</a></li>
                            </ul>
                        </div></Navbar.Brand></div>
                        <div><Navbar.Brand href="#"><div class="dropdown">
                            <button
                                className='button-style-2' type="button"
                                id="dropdownMenuButton"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                aria-expanded="false"
                            >
                                NIRF
                            </button>

                        </div></Navbar.Brand></div>
                    </Container>
                </Navbar>
            </div >
            <div className='adjust-logo'>
                <div className='logo-box'>
                    <div className='logo-box-1 heading-style' >
                        <div>
                            <div className='head-style '> <div ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOMhTwoFeeZTrzmRDeLcMfCcJ69pBRefNPck7otxbnQ&s' className='college-logo' /></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AboutNirmala'>
                <div className='about-nirmala-sub'>
                    <div className='about-nirmala-sub-1'>History</div>
                    <div className='about-nirmala-sub-2'>
                        <div className='sub2of1'>
                            <div className='sub2of1-sub'>
                                <div className='sub2of1-sub-boxes'>RTI Declaration</div>
                                <div className='sub2of1-sub-boxes'> Staff Council</div>
                                <div className='sub2of1-sub-boxes'>Governing Body</div>
                                <div className='sub2of1-sub-boxes'> Code Of Conduct</div>
                                <div className='sub2of1-sub-boxes'>Vision And Mission</div>
                                <div className='sub2of1-sub-boxes'>History</div>
                                <div className='sub2of1-sub-boxes'>About Nirmala</div>
                                <div className='sub2of1-sub-boxes'>Core Values</div>
                                <div className='sub2of1-sub-boxes'>Principal's Desk</div>
                            </div>
                        </div>
                        <div className='sub2of2-extra'>
                            <div className='sub2of2-sub'>
                                <h2 style={{ marginLeft: '10px', marginTop: '10px' }}>Our Vision</h2>
                                <h3 style={{fontSize:'20px',fontFamily:'serif',marginTop:'20px', marginLeft: '10px'}}>‘Academic Excellence with integrity of character’</h3>
                            </div>
                            <div className='sub2of2-sub'>
                                <h2 style={{ marginLeft: '10px', marginTop: '10px' }}>Our Mission</h2>
                                <h3 style={{fontSize:'20px',fontFamily:'serif',marginTop:'20px', marginLeft: '10px'}}>Integral development of human personality based on Christian ideals</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='second-last-container'>
                <div className='second-last-container-boxe1'><img src='https://cache.careers360.mobi/media/colleges/staticmap/2023/6/22/8610.png' style={{ width: '400px', height: '200px' }} /></div>
                <div className='second-last-container-boxe2'>
                    <div className='second-last-container-boxe2-sub'><h5 style={{ marginLeft: '25px' }}>USEFUL LINKS</h5></div>
                    <div className='second-last-container-boxe2-sub'>
                        <div className='university-data'>
                            <div className='university-first-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>MG University</p></div>
                            <div className='university-second-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>NAAC</p></div>
                        </div>
                        <div className='university-data'>
                            <div className='university-first-data'></div>
                            <div className='university-second-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>SSR 2020</p></div>
                        </div>
                    </div>
                    <div className='second-last-container-boxe2-sub'>
                        <div className='university-data'>
                            <div className='university-first-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}> Higher Education,Kerala</p></div>
                            <div className='university-second-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>AICTE</p></div>
                        </div>
                        <div className='university-data'>
                            <div className='university-first-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>Anti Ragging</p></div>
                            <div className='university-second-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>IGNOU</p></div>
                        </div>

                    </div>
                    <div className='second-last-container-boxe2-sub'>
                        <div className='university-data'>
                            <div className='university-first-data'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>Downloads</p></div>
                        </div>
                    </div>
                </div>
                <div className='second-last-container-boxe3'>
                    <div className='second-last-container-boxe3-sub'><h5 style={{ marginLeft: '5px' }}>CONTACT INFO </h5></div>
                    <div className='second-last-container-boxe3-sub'>
                        <div className='loc-box-1'>
                            <div className='info-logos'><img src="/Assets/location.svg" /></div>
                            <div className='information'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif' }}>Kizhakkekkara,Ernakulam District Muvattupuzha</p></div>
                        </div>
                        <div className='loc-box-1'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif', marginLeft: '25px' }}>Kerala-686661</p></div>
                    </div>
                    <div className='second-last-container-boxe3-sub'>
                        <div className='loc-box-1'>
                            <div className='info-logos'><img src="/Assets/telephone.svg" /></div>
                            <div className='information'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif' }}>+9148653342 , 9967543423</p></div>

                        </div>
                        <div className='loc-box-1'>
                            <div className='info-logos'><img src="/Assets/mail-icon.svg" /></div>
                            <div className='information'><p style={{ fontSize: '18px', color: '#535454', fontFamily: 'serif' }}>nirmalacolleg@gmail.com</p></div>

                        </div>
                    </div>
                    <div className='second-last-container-boxe4-sub'>
                        <div className='second-last-container-boxe4-subbox'>
                            <div className='socialmedia-logos'><img src="/Assets/facebook-logo.svg" style={{ width: '40px', height: '40px' }} /></div>
                            <div className='socialmedia-logos'><img src="/Assets/instagram-logo.svg" style={{ width: '40px', height: '40px' }} /></div>
                            <div className='socialmedia-logos'><img src="/Assets/youtube-logo.svg" style={{ width: '40px', height: '40px' }} /></div>
                            <div className='socialmedia-logos'><img src="/Assets/Twitter-logo.svg" style={{ width: '40px', height: '40px' }} /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='last-container'>
                <div className='last-container-sub'>Copyright 2024 Nirmala College.All Right Reserved.</div>
                <div className='last-container-sub'></div>
            </div>

        </>
    )
}

export default VisionAndMission