/* eslint-disable react/forbid-prop-types */
import React from "react"
import { Layout, Row, Col } from "antd"
import { graphql } from "gatsby"
import Header from "../../components/PageLayout/Header"
import SEO from "../../components/Seo"
import SidebarWrapper from "../../components/PageLayout/Sidebar"
import TagCard from "../../components/TagCard"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Blog = ({ data }) => {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="Education"
          description="This page consists of various Tags on various technologies that I'll be using
          to write blogs. You can check the blogs related to the tags by clicking on any of the tags below."
          path="tags"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">Education and Experience</h1>
            </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Mar 04, 2017"
                iconStyle={{ background: "#304cfc", color: "#fff" }}
                icon=""
              >
                <h3 className="vertical-timeline-element-title">
                Senior Secondary Education in Medical
                </h3>
                <p>
                Uttrakhand , India
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 10, 2020"
                iconStyle={{ background: "#ff965c", color: "#fff" }}
                icon=""
              >
                <h3 className="vertical-timeline-element-title">
                UNDERGRADUATE DIPLOMA - BUSINESS ADMINISTRATION
                </h3>
                <p>ALPHA COLLEGE OF BUSINESS AND TECHNOLOGY, SCARBOROUGH</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 05, 2020"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon=""
              >
                <h3 className="vertical-timeline-element-title">
                PROFESSIONAL EXPERIENCE
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                STLTH
                </h4>
                <p>Lab Supervisor Experienced in maintaining workforce. maintained clean and fully operational laboratory Equipment. Experienced in supervising the loading and unloading of cargo. Experienced in dealing conflicts at workplace with emotional Intelligence.</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  )
}

export default Blog
