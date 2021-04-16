import React from "react"
import Header from "../components/Header/Header"
import Layout from "../components/Layout/Layout"
import Panel from "../components/Panel/Panel"

const Home = () => {
  return (
    <Layout>
      <Header />
      <div className="flex">
        <div className="flex-grow mr-4">
          <Panel>
            <h1>Latest news</h1>
          </Panel>
        </div>
        <div className="w-1/4">
          <Panel>
            <h2>Screenshots</h2>
          </Panel>
        </div>
      </div>
    </Layout>
  )
}

export default Home
