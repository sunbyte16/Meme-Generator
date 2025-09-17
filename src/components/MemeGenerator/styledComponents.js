// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.isDarkTheme ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  transition: all 0.3s ease;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  background: ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: ${props => props.isDarkTheme 
    ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
    : '0 8px 32px rgba(0, 0, 0, 0.1)'};
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const Heading = styled.h1`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#35469c'};
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  text-shadow: ${props => props.isDarkTheme ? '2px 2px 4px rgba(0, 0, 0, 0.5)' : 'none'};
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`

export const ThemeToggle = styled.button`
  background: ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.8)'};
  border: 2px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: ${props => props.isDarkTheme 
    ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
    : '0 8px 32px rgba(0, 0, 0, 0.15)'};
  border: 2px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)'};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.isDarkTheme 
      ? '0 12px 40px rgba(0, 0, 0, 0.5)' 
      : '0 12px 40px rgba(0, 0, 0, 0.2)'};
  }
  
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const MemePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: ${props => props.isDarkTheme 
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)' 
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)'};
  border: 2px dashed ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
  
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const PreviewText = styled.p`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#666666'};
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  opacity: 0.7;
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 10px 0;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  backdrop-filter: blur(5px);
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.3)'};
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s ease;
  
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#7e858e'};
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 5px;
  text-shadow: ${props => props.isDarkTheme ? '1px 1px 2px rgba(0, 0, 0, 0.5)' : 'none'};
`

export const CustomInput = styled.input`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#5a7184'};
  background-color: ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : '#ffffff'};
  font-family: 'Open Sans';
  height: 45px;
  border: 2px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : '#d7dfe9'};
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 20px;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:focus {
    border-color: ${props => props.isDarkTheme ? '#0b69ff' : '#0b69ff'};
    box-shadow: 0 0 0 3px ${props => props.isDarkTheme ? 'rgba(11, 105, 255, 0.2)' : 'rgba(11, 105, 255, 0.1)'};
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.6)' : '#999999'};
  }
`

export const CustomSelect = styled.select`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#1e293b'};
  background-color: ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : '#ffffff'};
  font-family: 'Open Sans';
  height: 45px;
  border: 2px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : '#d7dfe9'};
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 20px;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  cursor: pointer;
  
  &:focus {
    border-color: ${props => props.isDarkTheme ? '#0b69ff' : '#0b69ff'};
    box-shadow: 0 0 0 3px ${props => props.isDarkTheme ? 'rgba(11, 105, 255, 0.2)' : 'rgba(11, 105, 255, 0.1)'};
    transform: translateY(-2px);
  }
  
  option {
    background-color: ${props => props.isDarkTheme ? '#1a1a2e' : '#ffffff'};
    color: ${props => props.isDarkTheme ? '#ffffff' : '#1e293b'};
  }
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding: 12px 14px;
  background-color: ${props => props.isDarkTheme ? '#1a1a2e' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#ffffff' : '#1e293b'};
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background: ${props => props.isDarkTheme 
    ? 'linear-gradient(135deg, #0b69ff 0%, #0056b3 100%)' 
    : 'linear-gradient(135deg, #0b69ff 0%, #0056b3 100%)'};
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isDarkTheme 
    ? '0 4px 15px rgba(11, 105, 255, 0.3)' 
    : '0 4px 15px rgba(11, 105, 255, 0.2)'};
  flex: 1;
  min-width: 120px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.isDarkTheme 
      ? '0 8px 25px rgba(11, 105, 255, 0.4)' 
      : '0 8px 25px rgba(11, 105, 255, 0.3)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
`

export const ResetButton = styled.button`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#666666'};
  background: ${props => props.isDarkTheme 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(255, 255, 255, 0.8)'};
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: 2px solid ${props => props.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  flex: 1;
  min-width: 120px;
  
  &:hover {
    transform: translateY(-3px);
    background: ${props => props.isDarkTheme 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(255, 255, 255, 1)'};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`

export const DownloadButton = styled.button`
  color: #ffffff;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  margin-top: 15px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`
