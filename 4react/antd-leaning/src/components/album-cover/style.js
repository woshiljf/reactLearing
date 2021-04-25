import styled from 'styled-components';

export const AlbumWrapper = styled.div`

  .album-image {
    position: relative;
    width: ${props => props.width};
    height: ${props => props.size};
    ${'' /* overflow: hidden; */}
    margin-top: 15px;
    cursor: pointer;
    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }
    :hover {
       &:after {
      display: block;
      content: '';
      width: 20px;
      height: 20px;
      background: url(${require("@/assets/img/sprite_icon.png").default})  no-repeat 0 0;
      position: absolute;
      bottom: 0;
      right: 15px;
      }
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }


  .album-info {
    cursor: pointer;
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      :hover{
      text-decoration: underline;
    }
    }
    .artist {
      color: #666;
      :hover{
      text-decoration: underline;
      }
    }
  }
`