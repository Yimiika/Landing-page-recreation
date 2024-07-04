// index.js
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/navbar.js';
import Card from '../components/card.js';
import Sides from '../components/sides.js';
import Logos from '../components/logos.js';
import Footer from '../components/footer.js';
import Content from '../components/content.js'
import styles from '../components/card.module.css';



export default function HomePage() {

  return (
    <div>
        <Navbar />
        <Content />
        <div className={styles.cardContainer}>
        <Card
          title="Guided Ideations"
          description="The AFF’s Innovation Lab holds regular ideation sprints to formulate and frame the future. Affiliates and members are invited to participate in our brainstorms and idea generation sessions."
          iconName="emoji_objects"
        />
                <Card
          title="Hackathon"
          description="At our hackathons we harness the creativity and talent of a large community of developers and experts to propose problems to be solved and presented as working prototypes."
          iconName="architecture"
        />
                <Card
          title="Accelerator Programs"
          description="The Accelerator program admits six (6) technology start-ups a year. Connecting Tech start-ups to Investors. You can steer the conversation to start-ups aligned with your corporate strategy."
          iconName="model_training"
        />
      </div>
      <Sides
      affImage = ""
      heading = "Who We Are"
      description = {"Africa Fintech Foundry (AFF) aims to nurture and accelerate the growth of Fintech startups in Africa thus fast-tracking their growth and maturity to deliver relevant solutions to the market, providing greater access to financial services to the financial excluded across the continent. \n \nAFF seeks to shore up the business capacity of startups, support business development, and facilitate access to capital, markets, customers and global innovation partners. \n \nFinancial solution providers in the global financial services sector are facing stiffer competition from new players in the financial technology (FinTech) space. Emerging technologies such as Blockchain, Cryptocurrency, P2P payments and lending, Robo-advisory, and Crowdfunding are disrupting traditional business models. The need to digitally transform and innovate in a customer-centric and engaging manner has never been more important to traditional financial service providers than now."}
      />
      <Logos/>
      <Footer/>
    </div>
  );
}