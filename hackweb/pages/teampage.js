import React from 'react'
import Styles from '../styles/teampage.module.css';
import { FaDAndD } from "react-icons/fa";
import {FaFulcrum} from "react-icons/fa";
import Head from 'next/head';
const teampage = () => {
  return (
 
    <>
  <Head>
	<title>Team Page</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 
</Head>

<section className={Styles.sectionteam}>
		<div className={Styles.container}>
 
			<div className={Styles.headersectionmain}>
					<div className={Styles.headersection}>
						<h3 className={Styles.smalltitle}>Elites</h3>
						<h2 className={Styles.title}>Let's meet with our team members</h2>
				</div>
			</div>

			<div className="row">
	
				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/C4E03AQF49LygdfUACQ/profile-displayphoto-shrink_400_400/0/1628187042403?e=1678320000&v=beta&t=pnjJcuy0-sP6xh4AUoSFeJhwHpYfvrJN_obVsXhMlfM" alt=""/>
							<span className={Styles.icon}>
								 <i className="fab fa-html5"><FaDAndD/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Somya</h3>
							<span className={Styles.speciality}>Team Member</span>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/D4D03AQFumiFnkpWvXg/profile-displayphoto-shrink_400_400/0/1674580565727?e=1681344000&v=beta&t=1D6UAQQg40JOrpOQbRU1TobSqBH_jGX1XBmUqfoZfOI" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-wordpress-simple"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Abhishek</h3>
							<span className={Styles.speciality}>Team Leader</span>
						</div>
					</div>
				</div>
		
				<div className="col-sm-6 col-lg-4 col-xl-3">
            <div className={Styles.singleperson}>
              <div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/C4D03AQF8PP2Cq_2iKw/profile-displayphoto-shrink_400_400/0/1652025715663?e=1681344000&v=beta&t=kKESWzaVPBPFn2mYb3PFqAeHL7FCTNA6NxTbm10RfxI" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-angular"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Nikhil</h3>
							<span className={Styles.speciality}>Team Member</span>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/D4D03AQH0VoPNvBD9rQ/profile-displayphoto-shrink_400_400/0/1675446209961?e=1681344000&v=beta&t=0-r5hiU4-d-NlbiWmUHqZt2bRJ8rwxuo9AqcFehOvCQ" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-js"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Mardav</h3>
							<span className={Styles.speciality}>Team Member</span>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/C4D03AQHYbI82xAhYDw/profile-displayphoto-shrink_400_400/0/1642169694904?e=1681344000&v=beta&t=nGbRGF1A0m9uxYS-wRmw-P0IIGBH3s6W8llsbmm_WEo" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-js"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Aditya Ola</h3>
							<span className={Styles.speciality}>Team Member</span>
						</div>
					</div>
				</div>
	
			</div>
		</div>
	</section>
	
      </>
 

  )
}

export default teampage

