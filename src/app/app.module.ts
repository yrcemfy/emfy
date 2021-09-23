import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AttendanceComponent } from './attendance/attendance.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { RegstudentComponent } from './regstudent/regstudent.component';
import { EnrolledStudentComponent } from './enrolled-student/enrolled-student.component';
import { UploadAttendanceComponent } from './upload-attendance/upload-attendance.component';




const firebaseConfig = {
  apiKey: "AIzaSyA-ySCyVNwhQ5dUEHP1OL_DXl8iicHtUiU",
  authDomain: "emfy-27f1c.firebaseapp.com",
  databaseURL: "https://emfy-27f1c-default-rtdb.firebaseio.com",
  projectId: "emfy-27f1c",
  storageBucket: "emfy-27f1c.appspot.com",
  messagingSenderId: "839853002523",
  appId: "1:839853002523:web:70de609155e8185c38cdbe",
  measurementId: "G-CZ61NXGTE5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    AttendanceComponent,
    ContactsComponent,
    AdminComponent,
    CreateEventComponent,
    DeleteEventComponent,
    RegstudentComponent,
    EnrolledStudentComponent,
    UploadAttendanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

