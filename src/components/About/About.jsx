import "../../App.css"
import CardAbout from "../CardAbout/CardAbout"
import HeaderSection from "../HeaderSection/HeaderSection"
import "./About.css"

function About() {
  const contentCard=[
    {
      icon:   <svg
      width="43"
      height="40"
      viewBox="0 0 43 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_19)">
        <path
          d="M35.3218 1.99558H32.4021C31.0771 1.99707 30.0034 3.01711 30.0019 4.27584V6.70941L23.3078 0.662069C22.344 -0.22069 20.8178 -0.22069 19.854 0.662069L2.47667 16.3606C1.68883 17.0717 1.44012 18.1688 1.84996 19.1249C2.21875 20.0545 3.15685 20.6684 4.20253 20.6644H4.73589V37.6663C4.74905 38.9656 5.86678 40.0096 7.23445 40H35.9255C37.2932 40.0096 38.4109 38.9656 38.424 37.6663V20.6644H38.9574C40.0031 20.6684 40.9412 20.0545 41.31 19.1249C41.7198 18.1687 41.4711 17.0717 40.6833 16.3606L37.7222 13.685V4.27584C37.7205 3.01711 36.6468 1.99707 35.3218 1.99558ZM31.4056 4.27584C31.4063 3.75328 31.8521 3.3298 32.4021 3.32909H35.3218C35.8719 3.3298 36.3176 3.75328 36.3184 4.27584V12.4168L31.4056 7.9776V4.27584ZM40.0059 18.6309C39.8446 19.0494 39.4265 19.3286 38.9573 19.3309H37.7221C37.3344 19.3309 37.0203 19.6295 37.0203 19.9977V37.6663C37.0076 38.2293 36.5181 38.6765 35.9254 38.6664H7.23437C6.6417 38.6765 6.15217 38.2293 6.13951 37.6663V19.9977C6.13951 19.6294 5.82525 19.3309 5.4377 19.3309H4.20244C3.73331 19.3286 3.31517 19.0494 3.15389 18.6309C2.95543 18.1812 3.07082 17.6618 3.44372 17.3267L20.8233 1.62288C21.2431 1.22877 21.9186 1.22877 22.3385 1.62288L39.7166 17.3247C40.0901 17.6604 40.2052 18.1807 40.0059 18.6309Z"
          fill="#025595"
        />
        <path
          d="M11.0523 23.9982C11.0494 27.6801 13.1784 31.0653 16.5927 32.8078C20.007 34.5502 24.1533 34.3676 27.3833 32.3325L32.0252 36.743C32.5562 37.2473 33.33 37.4442 34.0551 37.2595C34.7803 37.0747 35.3466 36.5366 35.5409 35.8476C35.7352 35.1587 35.5278 34.4237 34.9968 33.9194L30.3527 29.5115C32.8445 25.943 32.6681 21.2633 29.9142 17.8732C27.1603 14.483 22.44 13.1346 18.1746 14.5196C13.9092 15.9047 11.0456 19.7159 11.0523 23.9982ZM34.008 34.8661C34.1408 34.9886 34.2157 35.1569 34.2157 35.3327C34.2157 35.5085 34.1408 35.6769 34.008 35.7994C33.7345 36.0567 33.294 36.0567 33.0206 35.7994L28.5064 31.511C28.8567 31.2195 29.1863 30.9064 29.4932 30.5735L34.008 34.8661ZM30.7038 23.9982C30.7038 28.7852 26.6188 32.6658 21.5799 32.6658C16.541 32.6658 12.456 28.7852 12.456 23.9982C12.456 19.2111 16.5409 15.3305 21.5798 15.3305C26.6164 15.336 30.6979 19.2134 30.7038 23.9982Z"
          fill="#025595"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.4434 17.2967C15.6586 18.4769 13.8636 21.1012 13.8597 23.9981C13.8597 24.3664 14.174 24.6648 14.5615 24.6648C14.9492 24.6648 15.2634 24.3663 15.2634 23.9981C15.2671 21.6274 16.7364 19.48 19.0154 18.5141C19.2493 18.4201 19.4114 18.2133 19.4393 17.9735C19.4673 17.7337 19.3567 17.4982 19.1501 17.3579C18.9436 17.2175 18.6733 17.1941 18.4434 17.2967Z"
          fill="#025595"
        />
        <path
          d="M21.5799 17.9975C21.9675 17.9975 22.2817 17.699 22.2817 17.3308C22.2817 16.9626 21.9675 16.6641 21.5799 16.6641C21.1923 16.6641 20.8781 16.9626 20.8781 17.3308C20.8781 17.699 21.1923 17.9975 21.5799 17.9975Z"
          fill="#025595"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_19">
          <rect
            width="42.1053"
            height="40"
            fill="white"
            transform="translate(0.527283)"
          />
        </clipPath>
      </defs>
</svg>,
     head:"Search Apartment",
     desc:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiettempus felis vitae."
    },
    {
      icon:<svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.4832 1.99558H32.406C31.0095 1.99707 29.8779 3.01711 29.8762 4.27585V6.70941L22.821 0.662069C21.8052 -0.22069 20.1967 -0.22069 19.1809 0.662069L0.866098 16.3606C0.035758 17.0717 -0.226372 18.1688 0.205571 19.1249C0.594259 20.0545 1.58297 20.6684 2.68506 20.6644H3.2472V37.6663C3.26107 38.9656 4.4391 40.0096 5.88056 40H36.1194C37.5609 40.0096 38.7389 38.9656 38.7528 37.6663V20.6644H39.3149C40.417 20.6684 41.4057 20.0545 41.7944 19.1249C42.2264 18.1687 41.9642 17.0717 41.1339 16.3606L38.0131 13.685V4.27585C38.0113 3.01711 36.8797 1.99707 35.4832 1.99558ZM31.3557 4.27585C31.3565 3.75328 31.8263 3.3298 32.406 3.3291H35.4832C36.0629 3.3298 36.5327 3.75328 36.5335 4.27585V12.4168L31.3557 7.9776V4.27585ZM40.42 18.6309C40.25 19.0494 39.8093 19.3286 39.3149 19.3309H38.013C37.6044 19.3309 37.2733 19.6295 37.2733 19.9977V37.6663C37.2599 38.2293 36.744 38.6765 36.1194 38.6665H5.88047C5.25583 38.6765 4.73989 38.2293 4.72654 37.6663V19.9977C4.72654 19.6294 4.39532 19.3309 3.98687 19.3309H2.68498C2.19053 19.3286 1.74983 19.0494 1.57985 18.6309C1.37068 18.1812 1.4923 17.6618 1.88532 17.3267L20.2025 1.62288C20.645 1.22877 21.3569 1.22877 21.7994 1.62288L40.1151 17.3247C40.5087 17.6604 40.6301 18.1807 40.42 18.6309Z" fill="#025595"/>
      <path d="M28.7951 20.8046C28.3519 20.8046 27.9388 20.9261 27.5959 21.1331C27.3004 20.3769 26.4991 19.8325 25.5598 19.8325C25.1165 19.8325 24.7035 19.954 24.3605 20.1611C24.0651 19.4048 23.2638 18.8604 22.3244 18.8604C21.9319 18.8604 21.5631 18.9557 21.246 19.1219V15.9442C21.246 14.872 20.2786 14 19.0891 14C17.8995 14 16.9322 14.872 16.9322 15.9442V27.3088L13.9675 25.9722C13.5211 25.7709 13.0206 25.665 12.5213 25.665C11.3847 25.665 10.4615 26.4981 10.4615 27.5275C10.4615 28.0242 10.6761 28.4899 11.0654 28.8408L18.0387 35.1263C19.6143 36.5475 21.7119 37.33 23.9421 37.33C27.8073 37.33 30.9521 34.4954 30.9521 31.0114V22.7487C30.9521 21.6765 29.9847 20.8046 28.7951 20.8046ZM29.8736 31.0114C29.8736 33.9598 27.2119 36.3579 23.941 36.3579C21.9987 36.3579 20.174 35.6764 18.8022 34.438L11.8279 28.1526C11.6424 27.9863 11.54 27.7637 11.54 27.5217C11.54 27.0337 11.98 26.6371 12.5213 26.6371C12.8546 26.6371 13.1868 26.7081 13.4855 26.8422L17.2309 28.5298C17.3981 28.6046 17.5976 28.5968 17.7551 28.5084C17.9136 28.4199 18.0107 28.2634 18.0107 28.0952V15.9442C18.0107 15.4085 18.4938 14.9721 19.0891 14.9721C19.6844 14.9721 20.1675 15.4086 20.1675 15.9442V25.179C20.1675 25.4473 20.4091 25.665 20.7068 25.665C21.0044 25.665 21.246 25.4473 21.246 25.179V20.8046C21.246 20.269 21.7291 19.8325 22.3244 19.8325C22.9197 19.8325 23.4029 20.269 23.4029 20.8046V25.179C23.4029 25.4473 23.6445 25.665 23.9421 25.665C24.2398 25.665 24.4814 25.4473 24.4814 25.179V21.7767C24.4814 21.241 24.9645 20.8046 25.5598 20.8046C26.1551 20.8046 26.6382 21.2411 26.6382 21.7767V25.179C26.6382 25.4473 26.8798 25.665 27.1775 25.665C27.4751 25.665 27.7167 25.4473 27.7167 25.179V22.7487C27.7167 22.2131 28.1998 21.7767 28.7951 21.7767C29.3904 21.7767 29.8736 22.2132 29.8736 22.7487V31.0114Z" fill="#025595"/>
      </svg>
      ,
      head:"Select Apartment",
      desc:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiettempus felis vitae."
    },
    {
      icon:<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.7953 1.99558H30.8756C29.5506 1.99707 28.4769 3.01711 28.4753 4.27584V6.70941L21.7812 0.662069C20.8174 -0.22069 19.2912 -0.22069 18.3274 0.662069L0.950111 16.3606C0.162273 17.0717 -0.0864396 18.1688 0.323394 19.1249C0.692186 20.0545 1.63029 20.6684 2.67597 20.6644H3.20933V37.6663C3.22249 38.9656 4.34022 40.0096 5.7079 40H34.3989C35.7666 40.0096 36.8843 38.9656 36.8975 37.6663V20.6644H37.4309C38.4766 20.6684 39.4147 20.0545 39.7835 19.1249C40.1933 18.1687 39.9446 17.0717 39.1567 16.3606L36.1957 13.685V4.27584C36.194 3.01711 35.1203 1.99707 33.7953 1.99558ZM29.879 4.27584C29.8798 3.75328 30.3255 3.3298 30.8756 3.32909H33.7953C34.3453 3.3298 34.7911 3.75328 34.7918 4.27584V12.4168L29.879 7.9776V4.27584ZM38.4794 18.6309C38.3181 19.0494 37.8999 19.3286 37.4308 19.3309H36.1955C35.8079 19.3309 35.4937 19.6295 35.4937 19.9977V37.6663C35.4811 38.2293 34.9915 38.6765 34.3989 38.6664H5.70781C5.11515 38.6765 4.62562 38.2293 4.61295 37.6663V19.9977C4.61295 19.6294 4.29869 19.3309 3.91114 19.3309H2.67589C2.20675 19.3286 1.78861 19.0494 1.62733 18.6309C1.42887 18.1812 1.54426 17.6618 1.91716 17.3267L19.2967 1.62288C19.7166 1.22877 20.3921 1.22877 20.8119 1.62288L38.1901 17.3247C38.5636 17.6604 38.6787 18.1807 38.4794 18.6309Z" fill="#025595"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29858 24.7083C8.29858 30.6038 13.3482 35.4007 19.554 35.4007C25.7598 35.4007 30.8092 30.6038 30.8092 24.7083C30.8092 24.3564 30.7918 24.0084 30.7571 23.6653C30.7161 23.2648 30.3427 22.9731 29.9191 23.0101C29.4975 23.0489 29.1886 23.4047 29.2294 23.8062C29.259 24.1026 29.2744 24.4039 29.2744 24.7083C29.2744 29.7998 24.9135 33.9426 19.554 33.9426C14.1943 33.9426 9.8334 29.7998 9.8334 24.7083C9.8334 19.6166 14.1943 15.4737 19.554 15.4737C21.4172 15.4737 23.2303 15.9781 24.7958 16.9337C25.1529 17.1514 25.6268 17.0533 25.8568 16.7141C26.0862 16.3749 25.9818 15.9238 25.6256 15.706C23.8115 14.5998 21.712 14.0156 19.554 14.0156C13.3482 14.0156 8.29858 18.8128 8.29858 24.7083ZM20.2907 26.9242C20.44 27.0669 20.6365 27.138 20.8329 27.138C21.0294 27.138 21.2258 27.0669 21.3762 26.9251L32.6316 16.2324C32.9314 15.9477 32.9314 15.486 32.6316 15.2012C32.3319 14.9164 31.8459 14.9164 31.5459 15.2012L20.834 25.3777L16.7718 21.5185C16.472 21.2337 15.986 21.2337 15.6862 21.5185C15.3864 21.8033 15.3864 22.265 15.6862 22.55L20.2907 26.9242Z" fill="#025595"/>
      </svg>
      ,
      head:"Confirm Apartment",
      desc:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiettempus felis vitae."
    }

  ]
  return (
    <div className="my-container main-margin">
        <HeaderSection head={"How it Works"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing eli"}/>
        <div className="flex flex-col md:flex-row justify-between items-center"> 
          {contentCard.map((card)=>{
            return(
              <CardAbout icon={card.icon} head={card.head} desc={card.desc}/>
            )
          })}
        </div>
    </div>
  )
}

export default About