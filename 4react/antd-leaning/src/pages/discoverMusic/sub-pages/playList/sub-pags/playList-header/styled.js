import styled from 'styled-components'

export const SinegerHeaderWrapper = styled.div`

    height: 270px;
    background-color: #fff;
    display: flex;
`

export const SingerHeaderLeft = styled.div`
     .imgBox{
        width: 205px;
        height: 205px;
        margin-left:5px;
        border: 1px solid #ccc;
        padding:2px;
        box-sizing: border-box;
     img{
       width: 200px;
       height: 200px;
     }
     }
`

export const SingerHeaderright = styled.div`
        width: 100%;
        height: 200px;
        margin-left: 20px;
       .title{
        line-height: 25px;
        font-size: 20px;
        font-weight: normal;
        margin-bottom: 10px;
        .playIcon{
          display:inline-block;
          width: 69px;
          height: 25px;
          background-position: 6px -241px;
        }
       }
       .creator{
        vertical-align: middle;
        margin-bottom: 10px;
        img{
          width: 35px;
          height: 35px;
          margin-right: 20px;
        }

       }
       .tags{
        margin: 10px 0;
         .tag{
            
            display: inline-block;
            margin-right: 10px;
        
         }

       }
       .descriptions{
          overflow: hidden;
          text-overflow: ellipsis;
       }
`