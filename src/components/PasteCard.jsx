import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { deletePaste } from '../redux/pasteSlice';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
export const PasteCard = ({id, title, description, time='20 min'}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
function timeAgo(createdTime) {
    const now = new Date();
    const diffInMs = now - new Date(createdTime);  // Time difference in milliseconds

    const diffInSecs = Math.floor(diffInMs / 1000);  // Convert to seconds
    const diffInMins = Math.floor(diffInSecs / 60);  // Convert to minutes
    const diffInHours = Math.floor(diffInMins / 60);  // Convert to hours
    const diffInDays = Math.floor(diffInHours / 24);  // Convert to days

    if (diffInSecs < 60) {
      return `${diffInSecs} seconds ago`;  // Less than a minute
    } else if (diffInMins < 60) {
      return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;  // Less than an hour
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;  // Less than a day
    } else if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;  // Less than a month
    } else {
      return createdTime.toLocaleString();  // If older, display full date
    }
  }

    const actionIcons = [
        {   name : 'view',
            path : <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_89_608)">
            <path d="M8.96012 1.77783C6.71568 1.77783 4.91845 2.80005 3.61012 4.01672C2.31012 5.22228 1.44068 6.66672 1.02957 7.65839C0.937899 7.87783 0.937899 8.12228 1.02957 8.34172C1.44068 9.33339 2.31012 10.7778 3.61012 11.9834C4.91845 13.2001 6.71568 14.2223 8.96012 14.2223C11.2046 14.2223 13.0018 13.2001 14.3101 11.9834C15.6101 10.7751 16.4796 9.33339 16.8935 8.34172C16.9851 8.12228 16.9851 7.87783 16.8935 7.65839C16.4796 6.66672 15.6101 5.22228 14.3101 4.01672C13.0018 2.80005 11.2046 1.77783 8.96012 1.77783ZM4.96012 8.00005C4.96012 6.93919 5.38155 5.92177 6.13169 5.17163C6.88184 4.42148 7.89926 4.00005 8.96012 4.00005C10.021 4.00005 11.0384 4.42148 11.7885 5.17163C12.5387 5.92177 12.9601 6.93919 12.9601 8.00005C12.9601 9.06092 12.5387 10.0783 11.7885 10.8285C11.0384 11.5786 10.021 12.0001 8.96012 12.0001C7.89926 12.0001 6.88184 11.5786 6.13169 10.8285C5.38155 10.0783 4.96012 9.06092 4.96012 8.00005ZM8.96012 6.22228C8.96012 7.20283 8.1629 8.00005 7.18234 8.00005C6.98512 8.00005 6.79623 7.96672 6.61845 7.90839C6.46568 7.85839 6.2879 7.95283 6.29345 8.11394C6.30179 8.30561 6.32957 8.49728 6.38234 8.68894C6.7629 10.1112 8.22679 10.9556 9.64901 10.5751C11.0712 10.1945 11.9157 8.73061 11.5351 7.30839C11.2268 6.15561 10.2073 5.38061 9.07401 5.33339C8.9129 5.32783 8.81845 5.50283 8.86845 5.65839C8.92679 5.83616 8.96012 6.02505 8.96012 6.22228Z" fill="#F7F6F9" fill-opacity="0.82"/>
            </g>
            <defs>
            <clipPath id="clip0_89_608">
            <rect width="16" height="14.2222" fill="white" transform="translate(0.960083 0.888916)"/>
            </clipPath>
            </defs>
            </svg>,
            action: () => {
                navigate(`/ViewPaste/${id}`);
            }

        },
        {
            name : 'edit',
            path : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_89_604)">
              <path d="M14.7375 0.678076C14.0531 -0.00629884 12.9469 -0.00629884 12.2625 0.678076L11.3219 1.61558L14.3812 4.67495L15.3219 3.73433C16.0062 3.04995 16.0062 1.9437 15.3219 1.25933L14.7375 0.678076ZM5.3875 7.55308C5.19687 7.7437 5.05 7.97808 4.96562 8.23745L4.04062 11.0125C3.95 11.2812 4.02187 11.5781 4.22187 11.7812C4.42188 11.9843 4.71875 12.0531 4.99062 11.9625L7.76562 11.0375C8.02187 10.9531 8.25625 10.8062 8.45 10.6156L13.6781 5.38433L10.6156 2.32183L5.3875 7.55308ZM3 1.99995C1.34375 1.99995 0 3.3437 0 4.99995V13C0 14.6562 1.34375 16 3 16H11C12.6562 16 14 14.6562 14 13V9.99995C14 9.44683 13.5531 8.99995 13 8.99995C12.4469 8.99995 12 9.44683 12 9.99995V13C12 13.5531 11.5531 14 11 14H3C2.44687 14 2 13.5531 2 13V4.99995C2 4.44683 2.44687 3.99995 3 3.99995H6C6.55312 3.99995 7 3.55308 7 2.99995C7 2.44683 6.55312 1.99995 6 1.99995H3Z" fill="#F7F6F9" fill-opacity="0.82"/>
            </g>
            <defs>
              <clipPath id="clip0_89_604">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>,
          action : () => {
            // route to the view page in the edit mode ( similar to the create Paste Screen)
            navigate(`/${id}?edit=true`);
          }
        },
        {
            name : 'delete',
            path :<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
            <g clip-path="url(#clip0_89_602)">
              <path d="M3.95118 1.10627L3.7429 1.51995H0.965753C0.453718 1.51995 0.0400391 1.93363 0.0400391 2.44567C0.0400391 2.9577 0.453718 3.37138 0.965753 3.37138H12.0743C12.5864 3.37138 13 2.9577 13 2.44567C13 1.93363 12.5864 1.51995 12.0743 1.51995H9.29718L9.0889 1.10627C8.93268 0.790953 8.61158 0.594238 8.26154 0.594238H4.77854C4.4285 0.594238 4.1074 0.790953 3.95118 1.10627ZM12.0743 4.2971H0.965753L1.57904 14.1039C1.62532 14.8358 2.23282 15.4057 2.96472 15.4057H10.0754C10.8073 15.4057 11.4148 14.8358 11.461 14.1039L12.0743 4.2971Z" fill="#F7F6F9" fill-opacity="0.82"/>
            </g>
            <defs>
              <clipPath id="clip0_89_602">
                <rect width="12.96" height="14.8114" fill="white" transform="translate(0.0400391 0.594238)"/>
              </clipPath>
            </defs>
          </svg>,
          action : () => {
            // delete the paste from the store
            if (window.confirm("Are you sure you want to delete this paste?")) {
                dispatch(deletePaste(id));
              }
          }
        },
        {
            name : 'copy',
            path : <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
            <g clip-path="url(#clip0_89_606)">
              <path d="M6.01714 0.594238H9.60718C9.97457 0.594238 10.3275 0.741774 10.5879 1.00213L12.5521 2.96638C12.8125 3.22674 12.96 3.57967 12.96 3.94706V10.3142C12.96 11.0808 12.338 11.7028 11.5714 11.7028H6.01714C5.25054 11.7028 4.62857 11.0808 4.62857 10.3142V1.98281C4.62857 1.2162 5.25054 0.594238 6.01714 0.594238ZM1.38857 4.2971H3.70286V6.14852H1.85143V13.5542H7.40571V12.6285H9.25714V14.0171C9.25714 14.7837 8.63518 15.4057 7.86857 15.4057H1.38857C0.621964 15.4057 0 14.7837 0 14.0171V5.68567C0 4.91906 0.621964 4.2971 1.38857 4.2971Z" fill="#F7F6F9" fill-opacity="0.82"/>
            </g>
            <defs>
              <clipPath id="clip0_89_606">
                <rect width="12.96" height="14.8114" fill="white" transform="translate(0 0.594238)"/>
              </clipPath>
            </defs>
          </svg>,
          action: useCallback(() => {
            window.navigator.clipboard.writeText(description)
            alert('file copied to clipboard')
          },[description, id ])
        }
    ]
  return (
    <div className='size-72 bg-black/70 rounded-[18px] overflow-hidden shadow-lg'>
        <div className='bg-[#E8403B] h-16 flex flex-row w-full items-center justify-between p-5'>
            <div className='inline-flex flex-col'>
            <h2 className='text-[16px] font-semibold text-white/90'>{title}</h2>
            <h4 className='text-[12px] text-white/80 -mt-[3px]'>{timeAgo(time)}</h4>
            </div>
            <div>
                <div className='flex flex-row w-full gap-3'>
                    {
                        actionIcons.map(({name, path, action}) => (
                            <NavLink key={name} onClick={action}>{path}</NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='inline-flex flex-col w-full h-full '>
            <div className='text-[12px] px-5 py-[10px] text-white/80  h-2/3 overflow-scroll font-light   '>
                <p>{description}</p>
            </div>
            <div className='text-[14px] text-white/40 flex w-full h-8 items-center justify-center'>
                <h4 >{description.length} charecter</h4>
            </div>
        </div>
    </div>
  )
}
