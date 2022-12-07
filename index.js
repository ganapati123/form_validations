function formvalidations()
        {
            //Target uname input
            var uname_input=document.getElementById('uname')
            var email_input=document.getElementById('email')
            var password_input=document.getElementById('pwd')

            var status=true

            //errors
            var uname_span=document.getElementById('uname_span')
            var email_span=document.getElementById('email_span')
            var password_span=document.getElementById('pwd_span')

            //icons
            var wrong=`<i class="bi bi-exclamation-square-fill"></i>`
            var right=`<i class="bi bi-check-circle-fill"></i>  `

            if(uname_input.value=="" || uname_input.value==undefined)
            {
                uname_span.innerHTML=`${wrong}Enter name`
                uname_input.style.border="1px solid #f00c0c"
                uname_span.className="text-danger" //js with bootstrap
                status=false;
            }
            else if(!uname_input.value.match(/^[a-z]+$/))
            {
                uname_span.innerHTML=`${wrong}Enter Lowercase Alphabets only`
                uname_input.style.border="1px solid #10d909"
                uname_span.className="text-danger" //js with bootstrap
                status=false;
            }
            else
            {   
                uname_span.innerHTML=`${right}Thank you`
                uname_input.style.border="1px solid #10d909"
                uname_span.className="text-success" //js with bootstrap
                
            }


            if(email_input.value=="" || email_input.value==undefined)
            {
                email_span.innerHTML=`${wrong}Enter Email`
                email_input.style.border="1px solid #f00c0c"
                email_span.className="text-danger" //js with bootstrap
                status=false;
            }
            else if(!email_input.value.match(/^([a-zA-Z0-9_\.\-])+\@(([ a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
            {
                email_span.innerHTML=`${wrong}Enter valid Email name@domain.ext`
                email_input.style.border="1px solid #10d909"
                email_span.className="text-danger" //js with bootstrap
                status=false;
            }
            else
            {   
                email_span.innerHTML=`${right}Thank you`
                email_input.style.border="1px solid #10d909"
                email_span.className="text-success" //js with bootstrap
                
            }
        
            if(password_input.value=="" || password_input.value==undefined)
            {
                password_span.innerHTML=`${wrong}1 uppercase, lower case, number, special char`
                password_input.style.border="1px solid #f00c0c"
                password_span.className="text-danger" //js with bootstrap
                status=false;
            }
            else if(!password_input.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/))
            {
                password_span.innerHTML=`${wrong}Enter valid password`
                password_input.style.border="1px solid #10d909"
                password_span.className="text-danger" //js with bootstrap
                status=false;
            }
            else
            {   
                password_span.innerHTML=`${right}Thank you`
                password_input.style.border="1px solid #10d909"
                password_span.className="text-success" //js with bootstrap
                
            }
            return status;   
        }