//Dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
//Pages
import { AppPageLayout } from './components/organisms/layout/AppPageLayout'
import { CompensationPage } from './pages/AppPage/AppCompensation/CompensationPage';
import { CompletionRecoverPassword } from './Pages/LandingPage/LandingRecoverPassword/CompletionRecoverPassword';
import { HomePage } from './pages/AppPage/AppHomePage/HomePage';
import { LandingContact } from './Pages/LandingPage/LandingContact/LandingContact';
import { LandingHome } from './Pages/LandingPage/LandingHome/LandingHome';
import { LandingLogin } from './Pages/LandingPage/LandingLogin/LandingLogin'
import { LandingPrecios } from './Pages/LandingPage/LandingPrecios/LandingPrecios'
import { LandingRecoverPassword } from './Pages/LandingPage/LandingRecoverPassword/LandingRecoverPassword';
import { LandingRegister } from './Pages/LandingPage/LandingRegister/LandingRegister';
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
            <Route path={paths.CONTACT} element={<LandingContact />} />
            <Route path={paths.HOME} element={<LandingHome />} />
            <Route path={paths.LOGIN} element={<LandingLogin />} />
            <Route path={paths.PRECIOS} element={<LandingPrecios />} />
            <Route path={paths.RECOVERPASSWORD} element={<LandingRecoverPassword />} />
            <Route path={paths.RECOVERPASSWORDCOMPLETION} element={<CompletionRecoverPassword />} />
            <Route path={paths.REGISTER} element={<LandingRegister />} />
            <Route path={paths.APP} element={<AppPageLayout />}>
              <Route path={paths.APPCOMPENSACION} element={<CompensationPage />} />
              <Route path={paths.APPHOME} element={<HomePage />} />
              <Route path={paths.APPREGISTROS} element={<ScopeRecordPage />} />
              <Route path={paths.APPREGISTROSREPORTES} element={<ReportContainer />} />
              <Route path={paths.APPRESULTADOS} element={<AppPageResults />} />
              <Route path={paths.APPRESULTADOSEMPRESA} element={<PageCompanyResults />} />
              <Route path={paths.APPRESULTADOSEMPRESADETALLE} element={<PageCompanyDetailResults />} />
            </Route>
          </Routes>
        </HashRouter>
      </GlobalContextProvider>
    </div>
  )
}