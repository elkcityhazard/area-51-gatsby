import * as React from 'react';
import { GiRayGun, GiHumanTarget } from 'react-icons/gi';
import { RiAliensLine } from 'react-icons/ri';
import { StaticImage } from "gatsby-plugin-image"

// data
const data = [
    {
      id: 1,
      title: 'About Us',
      text: "Area 51 Paintball is all about #fortheloveofthegame! We want you to have a fun and enjoyable experience playing paintball. We try to help you to learn our sport and play it in a respectable way. We are a Volunteer run field. So our Refs are here because of their love of the game and the desire to teach it to others.  We are a Woods paintball field. We want to share our sport with others! This place rocks. come shoot someone!",
      url: "#about",
      icon: <GiRayGun size="60" />,
      image: <StaticImage  objectFit="cover" src='../images/paintball-player-tree.jpg' alt="a paintballer behind a tree" placeholder="blurred" loading="lazy" imgClassName="card-img"  layout="fullWidth" style={{gridArea: "1/1"}} /> 
    },
    {
        id: 2,
        title: 'Pricing',
        text: "Party kits start at $199. Ultimate Party Package! This pays for the first 6 players, add $35 for each additional player. Recommended for Birthday parties and large groups. Schedule your event on one of our many \"WALK ON\" days. (Check events page for dates) Groups with 12 or more players may schedule private games at 9:00am to 12:00 before regular play starts. $10 extra for morning groups to play the rest of the day.",
        url: "#pricing",
        icon: <RiAliensLine size="60"/>,
        image: <StaticImage objectFit="cover"  src='../images/girl-paintball-player.jpg' alt="a girl paintball player" placeholder="blurred" loading="lazy" imgClassName="card-img"  layout="fullWidth" style={{gridArea: "1/1"}} />
      },
      {
        id: 3,
        title: 'Contact Us',
        text: "Ready to get started?  Reach out today and we will be happy to help answer any questions or book your next event or party.",
        url: "#contact",
        icon: <GiHumanTarget size="60"/>,
        image: <StaticImage objectFit="cover" src='../images/alien-in-night-sky.jpg' alt="alien in night sky" placeholder="blurred" loading="lazy" imgClassName="card-img"  layout="fullWidth" style={{gridArea: "1/1"}} /> 
      },
      
  ]

  export default data