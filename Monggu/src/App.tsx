import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import DonationMap from './pages/DonationMap'
import RecipeSuggestions from './pages/RecipeSuggestions'
import Layout from './layout'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Homepage />
          </Layout>
        } />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/donation-map" element={
          <Layout>
            <DonationMap />
          </Layout>
        } />
        <Route path="/recipe-suggestions" element={
          <Layout>
            <RecipeSuggestions />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
