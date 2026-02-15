import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/manufacturer/Home'
import Login from './pages/manufacturer/Login'
import Forgot from './pages/manufacturer/Forgot'
import ManD from './pages/manufacturer/ManD'
import BusinessSettings from './pages/manufacturer/BusinessSettings'
import AddSaleInvoice from './pages/manufacturer/AddSaleInvoice'
import InventoryManagement from './pages/manufacturer/InventoryManagement'
import Recipes from './pages/manufacturer/Recipes'
import RecipeDetail from './pages/manufacturer/RecipeDetail'
import SalesDocuments from './pages/manufacturer/SalesDocuments'
import StaffDirectory from './pages/manufacturer/StaffDirectory'
import StaffDetail from './pages/manufacturer/Staffdetail'
import SalesCommission from './pages/manufacturer/SalesCommission'
import CommissionDetail from './pages/manufacturer/Commissiondetail'
import TeamCommunication from './pages/manufacturer/Teamcommunication '
import ChatConversation from './pages/manufacturer/ChatConversation'
import Announcements from './pages/manufacturer/Announcements'
import BusinessAnalytics from './pages/manufacturer/BusinessAnalytics'
import TaskManagement from './pages/manufacturer/Taskmanagement'
import TaskDetail from './pages/manufacturer/Taskdetail'
import PerformanceReports from './pages/manufacturer/PerformanceReports'
import Notifications from './pages/manufacturer/Notifications'
import SalesReport from './pages/manufacturer/Salesreport'
import InventoryReport from './pages/manufacturer/Inventoryreport'
import AttendanceReport from './pages/manufacturer/Attendancereport'
import ProductionReport from './pages/manufacturer/Productionreport'
import Leaderboard from './pages/manufacturer/Leaderboard'
import AttendanceTracker from './pages/manufacturer/Attendancetracker'
import ProductionPlanning from './pages/manufacturer/ProductionPlanning'
import OrderManagement from './pages/manufacturer/Ordermanagement'
import CreateProductionPlan from './pages/manufacturer/Createproductionplan'
import BOMManagement from './pages/manufacturer/Bommanagement'
import RawMaterialPlanning from './pages/manufacturer/RawMaterialPlanning'
import WastageTracking from './pages/manufacturer/Wastagetracking'
import AccountSetup from './pages/manufacturer/AccountSetup'
import CRM from './pages/manufacturer/Crm'

// WHolesaler
import WholesalerDashboard from './pages/wholesaler/Wholesalerdashboard'
import BulkInventoryManagement from './pages/wholesaler/BulkInventoryManagement'
import BusinessSettingss from './pages/wholesaler/BusinessSettingss'
import BusinessAnalyticss from './pages/wholesaler/BusinessAnalyticss'

import InventoryManagementt from './pages/wholesaler/InventoryManagementt'
import StaffDirectoryy from './pages/wholesaler/StaffDirectoryy'
import StaffDetaill from './pages/wholesaler/Staffdetaill'

import SalesCommissionn from './pages/wholesaler/SalesCommissionn'
import CommissionDetaill from './pages/wholesaler/Commissiondetaill'

import AttendanceTrackerr from './pages/wholesaler/Attendancetrackerr'
import TaskManagementt from './pages/wholesaler/Taskmanagementt'
import PerformanceReportss from './pages/wholesaler/PerformanceReportss'
import SalesReportt from './pages/wholesaler/Salesreportt'
import InventoryReportt from './pages/wholesaler/Inventoryreportt'
import AttendanceReportt from './pages/wholesaler/Attendancereportt'
import ProductionReportt from './pages/wholesaler/Productionreportt'
import TeamCommunicationn from './pages/wholesaler/Teamcommunicationn '
import ChatConversationn from './pages/wholesaler/ChatConversationn'
import Announcementss from './pages/wholesaler/Announcementss'
import Leaderboardd from './pages/wholesaler/Leaderboardd'
import AccountSetupp from './pages/wholesaler/AccountSetupp'
import CRMM from './pages/wholesaler/Crmm'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/manufacturer/dashboard" element={<ManD/>} />
        <Route path="/manufacturer/business-setting" element={<BusinessSettings/>} />
        <Route path="/manufacturer/addsaleinvoice" element={<AddSaleInvoice/>} />
        <Route path="/manufacturer/inventory-management" element={<InventoryManagement/>} />

        <Route path="/manufacturer/recipe" element={<Recipes />} />
        <Route path="/manufacturer/recipe/:id" element={<RecipeDetail />} />
        <Route path="/manufacturer/sales-document" element={<SalesDocuments />} />
        <Route path="/manufacturer/staff-directory" element={<StaffDirectory />} />
        <Route path="/manufacturer/staff-directory/:id" element={<StaffDetail />} />

        <Route path="/manufacturer/sales-commission" element={<SalesCommission/>} />
        <Route path="/manufacturer/sales-commission/:id" element={<CommissionDetail/>} />
        <Route path="/manufacturer/team-communication" element={<TeamCommunication />} />
        <Route path="/manufacturer/team-communication/chat/:id" element={<ChatConversation />} />
        <Route path="/manufacturer/team-communication/announcements" element={<Announcements />} />
        <Route path="/manufacturer/analytics" element={<BusinessAnalytics />} />

        <Route path="/manufacturer/tasks" element={<TaskManagement />} />
        <Route path="/manufacturer/tasks/:id" element={<TaskDetail />} />

        <Route path="/manufacturer/performance-reports" element={<PerformanceReports />} />
        <Route path="/manufacturer/performance-reports/sales" element={<SalesReport/>} />
        <Route path="/manufacturer/performance-reports/inventory" element={<InventoryReport/>} />
        <Route path="/manufacturer/performance-reports/attendance" element={<AttendanceReport />} />
        <Route path="/manufacturer/performance-reports/production" element={<ProductionReport />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/manufacturer/leaderboard" element={<Leaderboard />} />
        <Route path="/manufacturer/attendance" element={<AttendanceTracker />} />

{/* crm */}
  <Route path="/manufacturer/crm" element={<CRM />} />
        <Route path="/manufacturer/production-planning" element={<ProductionPlanning />} />
        <Route path="/manufacturer/order-management" element={<OrderManagement />} />
        <Route path="/manufacturer/create-production-plan" element={<CreateProductionPlan />} />
        <Route path="/manufacturer/bom-management" element={<BOMManagement />} />
        <Route path="/manufacturer/raw-material-planning" element={<RawMaterialPlanning />} />
        <Route path="/manufacturer/wastage-tracking" element={<WastageTracking />} />

        <Route path="/manufacturer/account" element={<AccountSetup />} />





        {/* WHOLESALER */}
        <Route path="/wholesaler/dashboard" element={<WholesalerDashboard />} />
                <Route path="/wholesaler/analytics" element={<BusinessAnalyticss />} />

        <Route path="/wholesaler/bulk-inventory" element={<BulkInventoryManagement />} />
        <Route path="/wholesaler/business-setting" element={<BusinessSettingss/>} />
<Route path="/wholesaler/inventory-management" element={<InventoryManagementt/>} />

 <Route path="/wholesaler/staff-directory" element={<StaffDirectoryy />} />
         <Route path="/wholesaler/staff-directory/:id" element={<StaffDetaill />} />

 
        <Route path="/wholesaler/sales-commission" element={<SalesCommissionn/>} />
                <Route path="/wholesaler/sales-commission/:id" element={<CommissionDetaill/>} />
        <Route path="/notifications" element={<Notifications />} />

 <Route path="/wholesaler/attendance" element={<AttendanceTrackerr />} />

    <Route path="/wholesaler/tasks" element={<TaskManagementt />} />

    <Route path="/wholesaler/performance-reports" element={<PerformanceReportss />} />
    <Route path="/wholesaler/performance-reports/sales" element={<SalesReportt/>} />
        <Route path="/wholesaler/performance-reports/inventory" element={<InventoryReportt/>} />
        <Route path="/wholesaler/performance-reports/attendance" element={<AttendanceReportt />} />
        <Route path="/wholesaler/performance-reports/production" element={<ProductionReportt />} />

            <Route path="/wholesaler/team-communication" element={<TeamCommunicationn />} />
             <Route path="/wholesaler/team-communication/chat/:id" element={<ChatConversationn />} />
        <Route path="/wholesaler/team-communication/announcements" element={<Announcementss />} />
  <Route path="/wholesaler/leaderboard" element={<Leaderboardd />} />
                   <Route path="/wholesaler/account" element={<AccountSetupp />} />
                     <Route path="/wholesaler/crm" element={<CRMM/>} />

      </Routes>
    </Router>
  )
}

export default App
