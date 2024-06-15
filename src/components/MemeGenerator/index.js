import {Component} from 'react'

import {
  ContainerDiv,
  CustomButton,
  CustomLabel,
  CustomInput,
  CustomForm,
  CustomSelect,
  CustomOption,
  MemeConatiner,
  TextContext,
  InnerContainer
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
// Write your code here
class MemeGenerator extends Component {
  state = {
    activeOptionFontId: fontSizesOptionsList[0].optionId,
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    optionFontId: '',
    topText: '',
    botomText: '',
    imageUrl: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveOptionFontId = event => {
    this.setState({activeOptionFontId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()

    const {imageUrlInput, topTextInput, bottomTextInput, activeOptionFontId} =
      this.state
    this.setState({
      optionFontId: activeOptionFontId,
      topText: topTextInput,
      botomText: bottomTextInput,
      imageUrl: imageUrlInput,
    })
  }

  renderGeneratorForm = () => {
    const {activeOptionFontId, topTextInput, imageUrlInput, bottomTextInput} =
      this.state
    return (
      <CustomForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="ImageUrl">Image Url</CustomLabel>
        <CustomInput
          id="ImageUrl"
          type="text"
          placeholder="Enter the Image URL"
          onChange={this.onChangeImageUrl}
          value={imageUrlInput}
        />

        <CustomLabel htmlFor="top">Top Text</CustomLabel>
        <CustomInput
          id="top"
          type="text"
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopText}
          value={topTextInput}
        />

        <CustomLabel htmlFor="bottom">Bottom Text</CustomLabel>
        <CustomInput
          id="bottom"
          type="text"
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomText}
          value={bottomTextInput}
        />

        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          value={activeOptionFontId}
          id="select"
          onChange={this.onChangeActiveOptionFontId}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>

        <CustomButton type="submit">Generate</CustomButton>
      </CustomForm>
    )
  }

  renderMemePage = () => {
    const {optionFontId, topText, botomText, imageUrl} = this.state
    return (
      <MemeConatiner backgroundImage={imageUrl} data-testid="meme">
        <TextContext activeFontSizeId={optionFontId}>{topText}</TextContext>
        <TextContext activeFontSizeId={optionFontId}>{botomText}</TextContext>
      </MemeConatiner>
    )
  }

  render() {
    return (
      <ContainerDiv>
        <h1>Meme Generator</h1>
        <InnerContainer>
        {this.renderGeneratorForm()}
        {this.renderMemePage()}
        </InnerContainer>
      </ContainerDiv>
    )
  }
}
export default MemeGenerator
