import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  ThemeToggle,
  HeaderContainer,
  DownloadButton,
  ResetButton,
  ButtonContainer,
  MemePreview,
  PreviewText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
    isDarkTheme: false,
    showPreview: false,
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
      showPreview: true,
    })
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  resetMeme = () => {
    this.setState({
      backgroundImageUrlInput: '',
      topTextInput: '',
      bottomTextInput: '',
      activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
      backgroundImageUrl: '',
      topText: '',
      bottomText: '',
      activeFontSizeId: '',
      showPreview: false,
    })
  }

  downloadMeme = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      
      // Add text to canvas
      const {topText, bottomText, activeFontSizeId} = this.state
      ctx.fillStyle = 'white'
      ctx.font = `bold ${activeFontSizeId}px Arial`
      ctx.textAlign = 'center'
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2
      
      if (topText) {
        ctx.strokeText(topText, canvas.width / 2, 50)
        ctx.fillText(topText, canvas.width / 2, 50)
      }
      
      if (bottomText) {
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20)
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20)
      }
      
      // Download
      const link = document.createElement('a')
      link.download = 'meme.png'
      link.href = canvas.toDataURL()
      link.click()
    }
    
    img.src = this.state.backgroundImageUrl
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      isDarkTheme,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme} isDarkTheme={isDarkTheme}>
        <CustomLabel htmlFor="backgroundImageUrl" isDarkTheme={isDarkTheme}>
          🖼️ Image URL
        </CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
          isDarkTheme={isDarkTheme}
        />
        <CustomLabel htmlFor="topText" isDarkTheme={isDarkTheme}>
          📝 Top Text
        </CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
          isDarkTheme={isDarkTheme}
        />
        <CustomLabel htmlFor="bottomText" isDarkTheme={isDarkTheme}>
          📝 Bottom Text
        </CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
          isDarkTheme={isDarkTheme}
        />
        <CustomLabel htmlFor="select" isDarkTheme={isDarkTheme}>
          🔤 Font Size
        </CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
          isDarkTheme={isDarkTheme}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}px
            </CustomOption>
          ))}
        </CustomSelect>
        <ButtonContainer>
          <GenerateButton type="submit" isDarkTheme={isDarkTheme}>
            ✨ Generate Meme
          </GenerateButton>
          <ResetButton type="button" onClick={this.resetMeme} isDarkTheme={isDarkTheme}>
            🔄 Reset
          </ResetButton>
        </ButtonContainer>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
      showPreview,
      isDarkTheme,
    } = this.state

    if (!showPreview) {
      return (
        <MemePreview isDarkTheme={isDarkTheme}>
          <PreviewText isDarkTheme={isDarkTheme}>
            🎨 Your meme will appear here
          </PreviewText>
        </MemePreview>
      )
    }

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl} isDarkTheme={isDarkTheme}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
        <ButtonContainer>
          <DownloadButton onClick={this.downloadMeme} isDarkTheme={isDarkTheme}>
            💾 Download
          </DownloadButton>
        </ButtonContainer>
      </MemeContainer>
    )
  }

  render() {
    const {isDarkTheme} = this.state
    
    return (
      <AppContainer isDarkTheme={isDarkTheme}>
        <MemeGeneratorContainer isDarkTheme={isDarkTheme}>
          <HeaderContainer isDarkTheme={isDarkTheme}>
            <Heading isDarkTheme={isDarkTheme}>🎭 Meme Generator</Heading>
            <ThemeToggle onClick={this.toggleTheme} isDarkTheme={isDarkTheme}>
              {isDarkTheme ? '☀️' : '🌙'}
            </ThemeToggle>
          </HeaderContainer>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
