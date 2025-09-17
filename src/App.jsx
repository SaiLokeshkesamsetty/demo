import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>CICD JENKINS DEMO</h1>
      </div>
      <div>
        <h2>Source code uses git repo and branch /main.In Build Triggers,select poll SCM and use Schedule * * * * *</h2>
          <h2>In BUILD Steps,add Windos BAtch  Command.</h2>
                            <h4>call npm install</h4>
                            <h4>call npm run build</h4>
                    <h3>rmdir /S /Q "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</h3>
                    <h3>mkdir "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</h3>
                    <h3>xcopy /E /I /Y dist\* "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</h3>
                    <h2>Another BUILD step with WINDOW Batch COmmand to restart tomcat</h2>    
      </div>
      
    </>
  )
}

export default App
