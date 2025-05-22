import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Public from './Routes/Public'
import React, { lazy, Suspense, useEffect, useState } from 'react'
const Home = lazy(()=>import('./pages/Home')) 
const AboutCompany=lazy(()=>import("./pages/about/AboutCompany"))
const VisionMission=lazy(()=>import("./pages/about/visionmission"))
const KeyFeatures=lazy(()=>import("./pages/about/keyfeatures"))
const SilverPlan=lazy(()=>import("./pages/bussinessPlan/silverPlan"))
const GoldPlan=lazy(()=>import("./pages/bussinessPlan/goldPlan"))
const RepurchasePlan=lazy(()=>import("./pages/bussinessPlan/repurchasePlan"))
const AwardReward=lazy(()=>import("./pages/bussinessPlan/awardsRewards"))
const NoniHealth=lazy(()=>import("./pages/Products/healthProducts/Noni"))
const Moringa=lazy(()=>import("./pages/Products/healthProducts/Moringa"))
const SeaBucktheran=lazy(()=>import("./pages/Products/healthProducts/SeaBuckthron"))
const SoftfeelNapkin=lazy(()=>import("./pages/Products/healthProducts/softfeelNapkin"))
const Berries=lazy(()=>import("./pages/Products/healthProducts/Berries"))
const HerbaVeer=lazy(()=>import("./pages/Products/healthProducts/HerbaVeer"))
const QuabaGold=lazy(()=>import("./pages/Products/agriProducts/QubaGold"))
const TrippleAction=lazy(()=>import("./pages/Products/agriProducts/TripleAction"))
const TopMight=lazy(()=>import("./pages/Products/agriProducts/TopMight"))
const TopBlueMixture=lazy(()=>import("./pages/Products/agriProducts/TopBlueMisture"))
const Top80=lazy(()=>import("./pages/Products/agriProducts/Top80Sticker"))
const TopCalbo=lazy(()=>import("./pages/Products/agriProducts/TopCalbo"))
const TopGaurd=lazy(()=>import("./pages/Products/agriProducts/TopGard"))
const ShubhLabh=lazy(()=>import("./pages/Products/agriProducts/ShubhLabh"))
const Video=lazy(()=>import("./components/Gallery/Videos"))
const Photos=lazy(()=>import("./components/Gallery/Photos"))
const Contact=lazy(()=>import("./pages/Contact"))
const Login=lazy(()=>import("./Security/Login/index"))
const ForgetPassword=lazy(()=>import("./Security/ForgetPassword"))
const RepurchaseProduct=lazy(()=>import("./pages/Products/RepurchaseProducts"))
const MarketingPrroduct=lazy(()=>import("./pages/marketingProducts"))
const ProductDetail=lazy(()=>import("./pages/productDetail"))
import Loader from './Loader'
import Private from './Dashboard/Routes/Private'
import Dashboard from './Dashboard/Pages/Dashborad'
import NewRegister from './Dashboard/Pages/newRegister'
import ProfileOverview from './Dashboard/Pages/profileManagement/overview'
import MyProfile from './Dashboard/Pages/profileManagement/myProfile'
import EditBank from './Dashboard/Pages/profileManagement/EditBank'
import WelcomeKit from './Dashboard/Pages/profileManagement/welcomeKit'
import UserAddRequest from './Dashboard/Components/UserAddRequest'
import UserViewPin from './Dashboard/Components/viewPin'
import JoinUser from './Dashboard/Components/joinuser'
import PaymentRecievedHistory from './Dashboard/Components/paymentReceivedHistory'
import IncomeHistory from './Dashboard/Components/IncomeHistory'
import PromotionReward from './Dashboard/Components/promotionReward'
import MyNetwork from './Dashboard/Components/MyNetwork'
import DirectMember from './Dashboard/Components/MyNetwork/DirectMember'
import DownlineMember from './Dashboard/Components/MyNetwork/DownlineMember'
import MotherTree from './Dashboard/Components/MyNetwork/MotherTree'
import GoldDownlineMember from './Dashboard/Components/MyNetwork/GoldDownlineMember'
import SilverBinaryIncome from './Dashboard/Components/Reports/SilverBinaryIncome/index.'
import GoldCounting from './Dashboard/Components/Reports/GoldCounting'
import GoldBinaryIncome from './Dashboard/Components/Reports/GoldBinaryIncome'
import ProcessedPayout from './Dashboard/Components/DailyPayout/ProcessedPayout'
import Reimbursement from './Dashboard/Components/DailyPayout/Reimbursement'
import TDSCharge from './Dashboard/Components/DailyPayout/TdsCharge'
import ChangePassword from './Dashboard/Components/Settings/ChangePassword'
import ChangeTransectonPassword from './Dashboard/Components/Settings/ChangeTransectionPassword'
import Transfer from './Dashboard/Components/EPinManagement/Transfer'
import MyEpins from './Dashboard/Components/EPinManagement/MyEPins'
import MyRequest from './Dashboard/Components/EPinManagement/MyRequests'
import TransferRejected from './Dashboard/Components/EPinManagement/TransfredRejected'

 
 
 
function App() {
  const[transactionPass,setTransactionPass]=useState()
useEffect(()=>{
  const randomTransactionPass=localStorage.getItem("transactionPass")
  setTransactionPass(randomTransactionPass)
console.log(randomTransactionPass)
},[])
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Public children={<Home/>}/>}/>
      <Route path='/about_company' element={<Public children={<AboutCompany/>}/>}/>
      <Route path='/vision_mission' element={<Public children={<VisionMission/>}/>}/>
      <Route path='/key_features' element={<Public children={<KeyFeatures/>}/>}/>
      <Route path='/silver_plan' element={<Public children={<SilverPlan/>}/>}/>
      <Route path='/gold_plan' element={<Public children={<GoldPlan/>}/>}/>
      <Route path='/repurchase_plan' element={<Public children={<RepurchasePlan/>}/>}/>
      <Route path='/award_reward' element={<Public children={<AwardReward/>}/>}/>
      <Route path='/noni' element={<Public children={<NoniHealth/>}/>}/>
      <Route path='/moringa' element={<Public children={<Moringa/>}/>}/>
      <Route path='/sea_buckethran' element={<Public children={<SeaBucktheran/>}/>}/>
      <Route path='/soft_feel_napkin' element={<Public children={<SoftfeelNapkin/>}/>}/>
      <Route path='/berries' element={<Public children={<Berries/>}/>}/>
      <Route path='/videos' element={<Public children={<Video/>}/>}/>
      <Route path='/photos' element={<Public children={<Photos/>}/>}/>
      <Route path='/contact' element={<Public children={<Contact/>}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/herba_veer' element={<Public children={<HerbaVeer/>}/>}/>
      <Route path='/quaba_gold' element={<Public children={<QuabaGold/>}/>}/>
      <Route path='/tripple_action' element={<Public children={<TrippleAction/>}/>}/>
      <Route path='/top_might' element={<Public children={<TopMight/>}/>}/>
      <Route path='/top_blue_mixture' element={<Public children={<TopBlueMixture/>}/>}/>
      <Route path='/top_80' element={<Public children={<Top80/>}/>}/>
      <Route path='/top_calbo' element={<Public children={<TopCalbo/>}/>}/>
      <Route path='/top_gaurd' element={<Public children={<TopGaurd/>}/>}/>
      <Route path='/shubh_labh' element={<Public children={<ShubhLabh/>}/>}/>
      <Route path='/forget_password' element={<ForgetPassword/>}/>
      <Route path='/repurchase_product' element={<Public children={<RepurchaseProduct/>}/>}/>
      <Route path='/marketing_product' element={<Public children={<MarketingPrroduct/>}/>}/>
      <Route path='/product_detail' element={<Public children={<ProductDetail/>}/>}/>
       <Route path='/user' element={<Private children={<Dashboard/>}/>}/>
      <Route path='/user/Dashboard' element={<Private children={<Dashboard/>}/>}/>
      <Route path='/user/New_Register' element={<Private children={<NewRegister/>}/>}/>
      <Route path='/user/profile_overview' element={<Private children={<ProfileOverview/>}/>}/>
      <Route path='/user/my_profile' element={<Private children={<MyProfile/>}/>}/>
      <Route path='/user/bank_detail' element={<Private children={<EditBank/>}/>}/>
      <Route path='/user/add_request' element={<Private children={<UserAddRequest/>}/>}/>
      <Route path='/user/view_pin' element={<Private children={<UserViewPin/>}/>}/>
      <Route path="/user/join_user" element={<Private children={ <JoinUser/>}/>}/>
      <Route path='/user/payment_received_history' element={<Private children={<PaymentRecievedHistory/>}/>}/>
      <Route path='/user/income_history' element={<Private children={<IncomeHistory/>}/>}/>
      <Route path='/user/promotion_reward' element={<Private children={<PromotionReward/>}/>}/>
      <Route path='/user/welcome_kit' element={<Private children={<WelcomeKit/>}/>}/>
      <Route path='/user/direct_member' element={<Private children={<MyNetwork children={<DirectMember/>}/>}/>}/>
      <Route path='/user/downline_member' element={<Private children={<MyNetwork children={<DownlineMember/>}/>}/>}/>
      <Route path='/user/mother_tree' element={<Private children={<MyNetwork children={<MotherTree/>}/>}/>}/>
      <Route path='/user/gold_downline_member' element={<Private children={<MyNetwork children={<GoldDownlineMember/>}/>}/>}/>
      <Route path='/user/silver_binary_income' element={<Private children={<MyNetwork children={<SilverBinaryIncome/>}/>}/>}/>
      <Route path='/user/gold_counting' element={<Private children={<MyNetwork children={<GoldCounting/>}/>}/>}/>
      <Route path='/user/gold_binary_income' element={<Private children={<MyNetwork children={<GoldBinaryIncome/>}/>}/>}/>
      <Route path='/user/processed_payout' element={<Private children={<MyNetwork children={<ProcessedPayout/>}/>}/>}/>
      <Route path='/user/reimbursement_of_expenditure' element={<Private children={<MyNetwork children={<Reimbursement/>}/>}/>}/>
      <Route path='/user/tds_charge' element={<Private children={<MyNetwork children={<TDSCharge/>}/>}/>}/>
      <Route path='/user/change_password' element={<Private children={<MyNetwork children={<ChangePassword/>}/>}/>}/>
      <Route path='/user/change_transection_password' element={<Private children={<MyNetwork children={<ChangeTransectonPassword/>}/>}/>}/>
      <Route path='/user/transfer' element={<Private children={<MyNetwork children={<Transfer/>}/>}/>}/>
      <Route path='/user/my_epins' element={<Private children={<MyNetwork children={<MyEpins/>}/>}/>}/>
      <Route path='/user/my_request' element={<Private children={<MyNetwork children={<MyRequest/>}/>}/>}/>
      <Route path='/user/transferred_rejected' element={<Private children={<MyNetwork children={<TransferRejected/>}/>}/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
