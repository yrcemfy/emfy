import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdminComponent } from './admin/admin.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { RegstudentComponent } from './regstudent/regstudent.component';
import { EnrolledStudentComponent } from './enrolled-student/enrolled-student.component';
import { UploadAttendanceComponent } from './upload-attendance/upload-attendance.component';

const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:"",component:LoginComponent},
  {path:"studhome",component:HomeComponent},
  {path :"trial",component:HeaderComponent},
  { path: "contacts", component: ContactsComponent },
  { path: "admin", component: AdminComponent },
  { path: "attendance", component: AttendanceComponent },
  { path: "create-event", component: CreateEventComponent },
  { path: "delete-event", component: DeleteEventComponent },
  { path: "regstudent", component: RegstudentComponent },
  { path: "enrolled-student", component: EnrolledStudentComponent },
  { path: "upload-attendance", component: UploadAttendanceComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

