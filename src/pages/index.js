import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import ab_tasty from "../img/ab_tasty.svg";
import gmelius from "../img/gmelius.svg";
import bubblegum from "../img/bubblegum.svg";
import website_planet from "../img/website_planet.svg";
import alternate1 from "../img/alternate1.png";
import alternate2 from "../img/alternate2.png";
import alternate3 from "../img/alternate3.png";

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Grow your business with content.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Power your business with done-for-you content marketing covering strategy, planning and production.
          </p>
          <p className="mt-8 md:mt-12">
          <a href="https://strategically.outgrow.us/strategically-2">
            <Button size="lg">GET A QUOTE</Button></a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="clients" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">TRUSTED BY BRANDS LIKE YOURS</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/4">
          <img
                src={bubblegum}
              />
          </div>
          <div className="w-full sm:w-1/4">
          <img
                src={gmelius}
              />
          </div>
          <div className="w-full sm:w-1/4">
          <img
                src={website_planet}
              />
          </div>
          <div className="w-full sm:w-1/4">
          <img
                src={ab_tasty}
              />
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="process"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Execute an actionable content plan, without lifting a finger.</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            From day one, you’ll get a dedicated project manager who'll work with you to define your content goals and create a tailored strategy. We'll get our SEO analyst to research your target keywords, which we'll then use to craft you a monthly content calendar.
          </p>
        </div>
      }
      secondarySlot={      <img
                  src={alternate1}
                />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Get your content written by the best.
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            However complex your niche or industry, we'll write content that drives results, every time. We're a team of highly experienced, native English writers and editors who've been published on authority blogs and brand websites, so you can count on us for quality.
          </p>
        </div>
      }
      secondarySlot={<img
                  src={alternate2}
                />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Drive more traffic. Convert more leads.
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            You can use the word limit in your content package however you need. So whether it be through crafting SEO optimized blog content, high converting landing pages or effective ads, you'll get all the copy you need to grow your business.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}

    />

    <section id="pricing" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Simple, scalable pricing.</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
          <div class="border-t-2 border-red-600 border-t-8 rounded-lg">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Pay as you go</p>
              <p className="mt-4">
                Per article</p>
                  <p className="mt-4">Blog posts</p>
                  <p className="mt-4">White papers</p>
                  <p className="mt-4">Ebooks</p>
                  <p className="mt-4">Unlimited Revisions</p>
            </Card>
            </div>
          </div>
          <div className="flex-1 px-3">
          <div class="border-t-2 border-orange-500 border-t-8 rounded-lg">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Grow Package</p>
              <p className="mt-4">
                12 articles (6000 words)</p>
                  <p className="mt-4">Keyword Research</p>
                  <p className="mt-4">Topic Creation</p>
                  <p className="mt-4">Monthly Content Calendar</p>
                  <p className="mt-4">Unlimited Revisions</p>
            </Card>
            </div>
          </div>
          <div className="flex-1 px-3">
          <div class="border-t-2 border-green-600 border-t-8 rounded-lg">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Scale Package</p>
              <p className="mt-4">
                24 articles (12,000 words)</p>
                  <p className="mt-4">Keyword Research</p>
                  <p className="mt-4">Topic Creation</p>
                  <p className="mt-4">Monthly Content Calendar</p>
                  <p className="mt-4">Unlimited Revisions</p>
            </Card>
            </div>
          </div>
        </div>
        <a href="https://strategically.outgrow.us/strategically-2">
          <Button size="xl">GET A QUOTE NOW</Button>
          </a>
      </div>
    </section>


    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">SaaS companies, digital agencies and consultancies work with us to grow their business.</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business with content?</h3>
      <p className="mt-8 text-xl font-light">
        Boost your rankings and generate more leads with flexible content packages to suit every business.
      </p>
      <p className="mt-8">
      <a href="https://strategically.outgrow.us/strategically-2">
        <Button size="xl">GET A QUOTE NOW</Button>
        </a>
      </p>
    </section>

  </Layout>
);
