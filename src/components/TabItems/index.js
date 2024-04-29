import './index.css'

const TabItems = props => {
  const {tabDetails, onClickTab, selectedTab} = props
  const {tabId, displayText} = tabDetails

  const byClickingTab = () => {
    onClickTab(tabId)
  }

  return (
    <li>
      <button
        className={`tab-button ${selectedTab === tabId ? 'add-style' : ''}`}
        type="button"
        onClick={byClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
