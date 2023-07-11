import React from "react";
import "../components/NeighborhoodLogin.css";

function NeighborhoodLogin() {
  return (
    <div>
      <div class="container-cardz">
        
        <div class="cardz">
            <div>
                <p className="loginz">
                    Login
                </p>
            </div>
          <div class="top-div">
          </div>

          <div class="input-text">
            <input type="text" required="required" />
            <span>Email</span>
            <i class="fa fa-envelope-o"></i>
          </div>

          <div class="input-text">
            <input
              type="password"
              required="required"
              id="password_input"
            //   value={passwordT}
            //   onChange={handlePasswordChange}
            />
            <span>Password</span>
            <i class="fa fa-eye-slash passcode"></i>
            <a href="#">Forgot your password?</a>
          </div>
          
          <div class="remember">
            <div>
              <input type="checkbox" name="rr" id="r1" />
              <label for="r1">Remember your password</label>
            </div>
          </div>
          <p>
          New here?
          </p>
          <a href="#">Create an account</a>
          <div class="sign-in">

        
            <button>Sign in</button>
          </div>

          <div class="or">
            <small>or sign in with</small>
          </div>
          <hr />
          <div class="google">
            <button>
              <i class="fa fa-google"></i> Google
            </button>
          </div>
          <div class="last">
            <div class="facebook">
              <button>
                <i class="fa fa-facebook"></i> Facebook
              </button>
            </div>
            <div class="twitter">
              <button>
                <i class="fa fa-twitter"></i> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeighborhoodLogin;
