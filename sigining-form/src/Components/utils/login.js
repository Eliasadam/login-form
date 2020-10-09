export async function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      email === "" && password === "" ? resolve() : reject();
    }, 1000);
  });
}


// export const Header = styled.div`
//   display: flex;
//   width: 100%;
//   margin-bottom: 2rem;
//   height: 8rem;
//   background-color: #0d506a;
//   box-shadow: 0 0.25rem 0.38rem #000;
//   align-items: center;

//   @media (max-width: 400px) {
//     flex-direction: column;
//   }
// `;
// export const LoginTitle = styled.h1`
//   font-size: 1.8rem;
//   color: #ffff;
//   text-align: center;
//   flex: 1 1 60em;
//   @media (max-width: 400px) {
//     display: flex;
//   }
// `;
// export const LogoutButtons = styled.button`
//   color: white;
//   background-color: #0d506a;
//   border-radius: 0.3rem;
//   border-color: white;
//   flex: 1 1 10em;
//   margin-right: 2rem;
// `;