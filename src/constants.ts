import { GitHub, LinkedIn, Mail } from '@mui/icons-material'

const socials = [{
    name: 'Linkedin',
    Icon: LinkedIn,
    link: "https://www.linkedin.com/in/samutoljamo/",
    style: {
      color: "#0077B5",
      fontSize: "40px"
    }
  },
  {
    name: "mail",
    Icon: Mail,
    link: "mailto:samu.toljamo@gmail.com",
    style: {
      fontSize: "40px"
    }
  },
  {
    name: "Github",
    Icon: GitHub,
    link: "https://github.com/samutoljamo/",
    style: {
        color: "#000",
        fontSize: "40px"
    }
  }
  ]
  
  const projects = [
    {
      "name": "Fuel Optimal Large Divert Guidance Algorithm",
      "description": "Despite the fancy name, this is my implementation of an existing algorithm which calculates the optimal way to land a spacecraft given certain conditions. The project is not deployed, but the readme contains a few images of example results.",
      "source": "https://github.com/samutoljamo/g-fold",
      "demo": undefined,
    },
    {
      "name": "This website",
      "description": "This website is a simple responsive static material UI React app",
      "source": undefined,
      "demo": "https://samutoljamo.github.io"
    },
    {
      "name": "Netvisor client for TS/JS",
      "description": "A JS/TS module which allows its user to communicate with Netvisor API easily. Unit and integration were written using mocha.",
      "source": "https://github.com/AvanioOy/netvisor-client",
      "demo": undefined
    },
    {
      "name": "N-body simulator",
      "description": "N-body simulator was created as a team effort during Junction 2023 Hackathon where we won the Veikkaus challenge. The project compares performance of rendering an n-body simulation using WebGPU compute shaders(physics on the gpu) versus using WebGL to render the simulation and making the physics calculations on the CPU in parallel with webworkers",
      "source": "https://github.com/ottohh/Junction2023",
      "demo": "https://victorious-pond-04b52a903.4.azurestaticapps.net/",
    },
  ]

export {socials, projects};
