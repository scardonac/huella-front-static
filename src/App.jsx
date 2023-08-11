//Dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
//Pages
import { AppPageLayout } from './components/organisms/layout/AppPageLayout'
import { CompensationPage } from './pages/AppPage/AppCompensation/CompensationPage';
import { HomePage } from './pages/AppPage/AppHomePage/HomePage';
import { LandingContact } from './Pages/LandingPage/LandingContact/LandingContact';
import { LandingHome } from './Pages/LandingPage/LandingHome/LandingHome';
import { LandingLogin } from './Pages/LandingPage/LandingLogin/LandingLogin'
import { LandingPrecios } from './Pages/LandingPage/LandingPrecios/LandingPrecios'
import { ReportContainer } from './components/organisms/reportContainer/ReportContainer';
import { ScopeRecordPage } from './pages/AppPage/AppScopeRecordPage/ScopeRecordPage';
//Context
import { GlobalContextProvider } from './context/GlobalContext';
//Routes
import { paths } from '../src/routes/paths.js'
//Components
import { AppPageResults, PageCompanyResults, PageCompanyDetailResults } from './Pages/AppPage/AppResultadosPage';
//Css
import './App.css'

export const App = () => {
  return (
    <div className='App'>
      <GlobalContextProvider>
        <HashRouter>
          <Routes>
            <Route path={paths.HOME} element={<LandingHome />} />
            <Route path={paths.PRECIOS} element={<LandingPrecios />} />
            <Route path={paths.CONTACT} element={<LandingContact />} />
            <Route path={paths.LOGIN} element={<LandingLogin />} />
            <Route path={paths.RECOVERPASSWORD} element={<LandingLogin />} />
            <Route path={paths.APP} element={<AppPageLayout />}>
              <Route path={paths.APPHOME} element={<HomePage />} />
              <Route path={paths.APPREGISTROS} element={<ScopeRecordPage />} />
              <Route path={paths.APPREGISTROSREPORTES} element={<ReportContainer />} />
              <Route path={paths.APPRESULTADOS} element={<AppPageResults />} />
              <Route path={paths.APPRESULTADOSEMPRESA} element={<PageCompanyResults />} />
              <Route path={paths.APPRESULTADOSEMPRESADETALLE} element={<PageCompanyDetailResults />} />
              <Route path={paths.APPCOMPENSACION} element={<CompensationPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </GlobalContextProvider>
    </div>
  )
}