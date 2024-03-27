import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row, Carousel, Stack, Card } from 'react-bootstrap'
import './WorkNirmalaCollege.css'
import ExampleCarouselImage from './ExampleCarouse'
import ExampleImageOne from './ExampleImageOne'
import ExampleImageTow from './ExampleImageTow'
import ExampleImageThree from './ExampleImageThree'
import { Link } from 'react-router-dom'
const WorkNirmalaCollege = () => {
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
                                <li>
                                    <Link to={'/AboutNirmala'} class="drop-down-style dropdown-item " href="#">About Nirmala</Link>
                                </li>
                                <li>
                                    <Link to={'/HistoryOfNirmala'} class="dropdown-item drop-down-style " href="#">History </Link>
                                </li>
                                <li>
                                    <Link to={'/Vision'} class="dropdown-item drop-down-style" href="#"> Vision And MiSSion</Link>
                                </li>
                                <li><Link to={'/CoreValues'} class="dropdown-item drop-down-style" href="#"> Core Values</Link></li>
                                <li><a class="dropdown-item drop-down-style" href="#">  Principal's Desk</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#"> Code of Conduct</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#to-gallery"> Governing Body</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#to-gallery"> Staff Council</a></li>
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
                                <li><a class="dropdown-item drop-down-style" href="#carousel-contents">Department</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#carousel-contents">Programs</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#show-calender">Academic Calender</a></li>
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
                                <li><a class="dropdown-item drop-down-style" href="#to-gallery">Ph.D Alumini</a></li>
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
                                <li><a class="dropdown-item drop-down-style " href="#to-gallery">Student Union</a></li>
                                <li><a class="dropdown-item drop-down-style" href="#to-gallery">Swachh Nirmala</a></li>
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
                                <li><a class="dropdown-item drop-down-style" href="#carousel-contents">Library</a></li>
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

            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleImageOne text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleImageTow text="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleImageThree text="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='contents'>
                <div className='content-container'><div className='content-one'><span class="blink">Online TCS Registration</span></div></div>
                <div className='content-container'> <div className='content-two'><span class="blink">Admission</span></div></div>
                <div className='content-container'><div className='content-one'> <span class="blink">Online Fee Payment</span></div></div>
            </div>
            <div className='moving-text'>
                <div className='movingtext-box'>
                    <marquee behavior="scroll" direction="left" scrollamount="4">
                        UG and PG Admission 2023-24(contact : 9496435370) | MCA  Admission 2023 | Civil Service Coaching Admission Started | National Level FDP on OBE May 10 to 17 ...
                    </marquee>
                </div>
            </div>

            <div className='container-w'id='show-calender'>
                <div className='container-w-1'>
                    <div className='container-w-1-item1'>
                        <div className='headings'>
                            <div className='heading-1'>News & Events</div>
                            <div className='heading-2'>Announcements</div>
                        </div>
                        <Stack gap={4} className='scrolling-box'>

                            <div className='scroll-item-1'>
                                <div className='item-date'>
                                    <div className='date-num-1'><h2>06</h2></div>
                                    <div className='date-num-2'> MAR-24</div>
                                </div>
                                <div className='programs'> Romeo and Juliet</div>
                                <div className='read-more'>Read More</div>
                            </div>

                            <div className='scroll-item-1'>
                                <div className='item-date'>
                                    <div className='date-num-1'><h2>02</h2></div>
                                    <div className='date-num-2'> MAR-24</div>
                                </div>
                                <div className='programs'>Congratulations for winners of M G University Kalolsavam-2024</div>
                                <div className='read-more'>Read More</div>
                            </div>

                            <div className='scroll-item-1'>
                                <div className='item-date'>
                                    <div className='date-num-1'><h2>12</h2></div>
                                    <div className='date-num-2'> MAR-24</div>
                                </div>
                                <div className='programs'> Brideging Binaries</div>
                                <div className='read-more'>Read More</div>
                            </div>

                            <div className='scroll-item-1'>
                                <div className='item-date'>
                                    <div className='date-num-1'><h2>22</h2></div>
                                    <div className='date-num-2'> JAN-04</div>
                                </div>
                                <div className='programs'>Congratulation For Sreeraj K A(Bronze Medal Winner in KHELO India) </div>
                                <div className='read-more'>Read More</div>
                            </div>

                            <div className='scroll-item-1'>
                                <div className='item-date'>
                                    <div className='date-num-1'><h2>09</h2></div>
                                    <div className='date-num-2'> JAN-04</div>
                                </div>
                                <div className='programs'>Anumodhana Yogam</div>
                                <div className='read-more'>Read More</div>
                            </div>
                        </Stack>
                    </div>
                    <div className='container-w-1-item2'>
                        <div className='container-w-1-item2-subbox-1 '>
                            <div className='logo-container'><img src='data:image/png;base64,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' style={{ width: '52px', height: '52px', borderRadius: '50%', marginLeft: '5px', marginTop: '4px' }} /></div>
                            <div><p style={{ color: 'white', fontSize: '20px', marginLeft: '5px' }}>Nirmala College, Muvattupuzha Official <p style={{ fontSize: '12px', marginTop: '5px' }}>4379,followers</p></p></div>
                        </div>
                        <div className='container-w-1-item2-subbox-2'>
                            <div className='container-w-1-item2-subbox-2-fb'>
                                <div className='college-details-fb'>
                                    <div className='logo-for-fb'><img src='data:image/png;base64,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' style={{ width: '60px', height: '60px', borderRadius: '50%' }} /></div>
                                    <div className='heading-for-fb' ><h6 style={{ fontSize: '15px', marginTop: '12px', color: ' rgb(78, 50, 178)' }}>Nirmala College,Muvattupuzha Official</h6><p style={{ fontSize: '12px', marginBottom: '14px', color: 'grey' }}>4 hours ago</p></div>
                                    <div className='logo-for-fb'> <img src='data:image/jpeg;base64,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' style={{ borderRadius: '50%', width: '20px', height: '20px' }} /></div>
                                </div>
                                <p style={{ marginLeft: '25px', fontSize: '15px' }}>Monday Melodies <p style={{ fontSize: '15px' }}>Nirmala College,Muvattupuzha</p></p>
                                <img src='https://nirmalacollegemty.edu.in/wp-content/uploads/2022/08/Nirmala-Arts-and-Science-College.webp' style={{ width: '400px', height: '250px', marginLeft: '32px' }} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='container-w-2' id='carousel-contents'>
                <div className='sub-container-w-2'>
                    <div className='sub-container-w-2-items'>
                        <div className='sub-container-w-2-items-box'>
                            <div className='sub-container-w-2-items-box-1'><img src="/Assets/cap-icon.svg" style={{ width: '60px', height: '50px' }} /></div>
                            <div className='sub-container-w-2-items-box-1'><h1>7</h1></div>
                            <div className='sub-container-w-2-items-box-1-name'>Research centers</div>
                        </div>
                    </div>
                    <div className='sub-container-w-2-items'>
                        <div className='sub-container-w-2-items-box'>
                            <div className='sub-container-w-2-items-box-1'><img src="/Assets/faculty.svg" style={{ width: '60px', height: '50px' }} /></div>
                            <div className='sub-container-w-2-items-box-1'><h2>1</h2><h1>37</h1></div>
                            <div className='sub-container-w-2-items-box-1-name'>Our Faculty</div>
                        </div>
                    </div>
                    <div className='sub-container-w-2-items'>
                        <div className='sub-container-w-2-items-box'>
                            <div className='sub-container-w-2-items-box-1'><img src="/Assets/students.svg" style={{ width: '60px', height: '50px' }} /></div>
                            <div className='sub-container-w-2-items-box-1'><h1>3o53</h1></div>
                            <div className='sub-container-w-2-items-box-1-name'>Our Students</div>
                        </div>
                    </div>
                    <div className='sub-container-w-2-items'>
                        <div className='sub-container-w-2-items-box'>
                            <div className='sub-container-w-2-items-box-1'><img src="/Assets/programmes.svg" style={{ width: '60px', height: '50px' }} /></div>
                            <div className='sub-container-w-2-items-box-1'><h1>3</h1><h2>8</h2></div>
                            <div className='sub-container-w-2-items-box-1-name' >Programmes</div>
                        </div>
                    </div>
                    <div className='sub-container-w-2-items'>
                        <div className='sub-container-w-2-items-box'>
                            <div className='sub-container-w-2-items-box-1'><img src="/Assets/book.svg" style={{ width: '60px', height: '50px' }} /></div>
                            <div className='sub-container-w-2-items-box-1'><h1>8Oo55+</h1></div>
                            <div className='sub-container-w-2-items-box-1-name'>Library Books</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cards-container'>

                <div className='cards-boxes-1'>
                    <Card style={{ width: '20.5rem', height: '34.5rem' }}>
                        <Card.Img variant="top" src="https://digicampus.tech/wp-content/uploads/2021/07/Onze-missies.png" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'serif' }}>DIGI-CAMPUS</Card.Title>
                            <Card.Text className='text-for-card-1'>
                                DIGITAL NIRMALA INITIATIVE “Lets Transform” The institution considers the ‘Digital India’ programme as a landmark initiative
                            </Card.Text>
                            <div className='card-readmore'>Read More</div>
                        </Card.Body>
                    </Card>

                </div>
                <div className='cards-boxes-2'>
                    <Card style={{ width: '20.5rem', height: '36rem' }}>
                        <Card.Img variant="top" src="https://english.mathrubhumi.com/image/contentid/policy:1.4725666:1644618795/image.jpg?$p=0f6e831&f=16x10&w=856&q=0.8" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'serif' }}><h3>Break the Chain @ Nirmala</h3></Card.Title>
                            <Card.Text className='text-for-card-2'>
                                Nirmala College also became part of the Break the Chain campaign to fend off the Covid-19 spread.
                            </Card.Text>
                            <div className='card-readmore'>Read More</div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards-boxes-3'>
                    <Card style={{ width: '20.5rem', height: '35rem' }}>
                        <Card.Img variant="top" src="https://nirmalacollege.ac.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-18-at-9.39.48-PM.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'serif' }}><h4>RELIANCE YOUTH FOUNDATION FOOTBALL</h4></Card.Title>
                            <Card.Text className='text-for-card-1'>
                                The Football team brings accolades to the College. The College Football team has won the prestigious
                            </Card.Text>
                            <div className='card-readmore'>Read More</div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards-boxes-4'>
                    <Card style={{ width: '20.5rem', height: '36rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'serif' }}><h4>NIRMALA HASTHAM</h4></Card.Title>
                            <Card.Text className='text-for-card-1'>
                                Nirmala College, Muvattupuzha is a first grade college which has completed 70 years of glorious service to the cause of higher education
                            </Card.Text>
                            <div className='card-readmore'>Read More</div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='image-box' id='to-gallery' >
                <div className='first-box' style={{ backgroundColor: 'white' }}>
                    <Carousel >
                        <Carousel.Item>
                            <div className='content-box' style={{ backgroundColor: 'white' }}>
                                <div className='image-Box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-3U9WNUn2cV4pq3orOtb6L-A3nLVqJ31zQ&usqp=CAU' style={{ width: '150px', height: '150px' }} /></div>
                                <Carousel.Caption>
                                    <h3 style={{ color: 'black' }}>Swach Nirmala</h3>
                                    <p style={{ color: 'grey' }}>Nirmala College has 53 acres of land rich with vegetation and natural beauty. It ensures several measures to preserve its greenery and cleanliness.</p>

                                </Carousel.Caption>
                            </div>
                            <div className='content-readmore' style={{ fontSize: '12px' }}>Read More</div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='content-box' style={{ backgroundColor: 'white' }}>
                                <div className='image-Box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXDWuOjSwGplUB0Bdh8iki54KmPHT3tpnMQ&usqp=CAU' style={{ width: '150px', height: '150px', borderRadius: '50%' }} /></div>
                                <Carousel.Caption>
                                    <h3 style={{ color: 'black' }}>Science and Society</h3>
                                    <p style={{ color: 'grey' }}>Science and Society feature original research articles and insightful reviews on theoretical and practical aspects of research work </p>

                                </Carousel.Caption>
                            </div>
                            <div className='content-readmore' style={{ fontSize: '12px' }}>Read More</div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='content-box' style={{ backgroundColor: 'white' }}>
                                <div className='image-Box'><img src='data:image/jpeg;base64,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' style={{ width: '150px', height: '150px' }} /></div>
                                <Carousel.Caption>
                                    <h4 style={{ color: 'black' }}>Unnath Bharath Abhiyan</h4>
                                    <p style={{ color: 'grey' }}>Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes </p>

                                </Carousel.Caption>
                            </div>
                            <div className='content-readmore' style={{ fontSize: '12px' }}>Read More</div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='second-box'>
                    <div className='heading-Box'>
                        <div className='heading-Box-container-1' style={{ color: 'white' }}><h5>PHOTO</h5></div>
                        <div className='heading-Box-container-2' style={{ color: 'white' }}><h2>GALLERY</h2></div>
                        <div className='heading-Box-container-3' style={{ color: 'white' }}>Photos Of College Facilities and Activities</div>
                        <Link to={'/NirmalaGallery'} className='heading-Box-container-4'>CLICK TO VIEW ALL GALLERIES</Link>
                    </div>

                </div>
                <div className='third-box'>
                    <Carousel>
                        <Carousel.Item>
                            <div className='content-box' >
                                <div className='image-Box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC8bcQddzkEF3NMcM0EOe65nCueZj2kuQmg&usqp=CAU' style={{ width: '150px', height: '150px', borderRadius: '50%' }} /></div>
                                <Carousel.Caption>
                                    <p style={{ color: 'white', fontFamily: 'serif' }}>"Never be monorose and be pleseant even in moments if crisis" this was the quintessence I recieved from Nirmala College..</p>
                                    <h8 style={{ color: '#44ddc1 ', fontFamily: 'serif' }}>JUSTICE K. KARUNAKARAKURUP</h8>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='content-box' >
                                <div className='image-Box'><img src='data:image/jpeg;base64,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' style={{ width: '150px', height: '150px', borderRadius: '50%' }} /></div>
                                <Carousel.Caption>
                                    <p style={{ color: 'white', fontFamily: 'serif' }}>"I am extremley delightful to visit my own college.My heartfelt wishes to everyone. </p>
                                    <h7 style={{ color: '#44ddc1 ', fontFamily: 'serif' }}>SRI.VINSON M PAUL I.P.S</h7>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='content-box' >
                                <div className='image-Box'><img src='https://keralaagriculture.gov.in/wp-content/uploads/2022/07/ashok-ias.jpg' style={{ width: '150px', height: '150px', borderRadius: '50%' }} /></div>
                                <Carousel.Caption>
                                    <p style={{ color: 'white', fontFamily: 'serif' }}>"Found a younger committed team at work under the leadership of principal"</p>
                                    <h8 style={{ color: '#44ddc1 ', fontFamily: 'serif' }}>DR.B ASHOK</h8>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='content-box' >
                                <div className='image-Box'><img src='data:image/jpeg;base64,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' style={{ width: '150px', height: '150px', borderRadius: '50%' }} /></div>
                                <Carousel.Caption>
                                    <p style={{ color: 'white', fontFamily: 'serif' }}>I owe my everything to my Alma Mater,Nirmala.The seeds of my literary career sprouted in this fertile soil.</p>
                                    <h8 style={{ color: '#44ddc1 ', fontFamily: 'serif' }}>DR.GEORGE ONAKKOOR</h8>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>
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

export default WorkNirmalaCollege