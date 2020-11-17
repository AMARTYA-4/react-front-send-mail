

const initialState = {
  selectedDeviceType: "",
  selectedClassificationType: "",
  selectedModelType: "",
  selectedColorType: "",
  selectedIssueType: "",
  selectedDetailsType: "",
  selectedItem: "",
  selectedIsuueQzType: "",
  selectedIsuueTool: "",

  selectedScheduleType: "",


  DeviceType: {
    "MobilesTablets": "MobilesTablets",
    "WiFiSupport": "WiFiSupport",
    "SecurityCameras": "SecurityCameras",
    "WindowsComputerLaptops": "WindowsComputerLaptops",
    "Antivirus": 'Antivirus',
    "BackupSolutions": "BackupSolutions",
    "MacMacBooks": "MacMacBooks"
  },
  Classification: {
    MobilesTablets: {
      "iPhoneRepair": "iPhoneRepair",
      "SamsungRepair": "SamsungRepair",
      "iPadRepair": "iPadRepair"
    },
    WindowsComputerLaptops: {
      "SoftwareSetupandSupport": "SoftwareSetupandSupport",
      "HardwareSupport": "HardwareSupport",
    },
    MacMacBooks: {
      "HardwareSupport": "HardwareSupport",
      "SoftwareSetupSupport": "SoftwareSetupSupport"
    },
  },
  Model_type: {
    iPhoneRepair: {
      "iPhoneXs": "iPhoneXs",
      "iPhoneXsMax": "iPhoneXsMax",
      "iPhoneXR": "iPhoneXR",
      "iPhoneX": "iPhoneX",
      "iPhone8": "iPhone8",
      "iPhone8Plus": "iPhone8Plus",
      "iPhone7": "iPhone7",
      "iPhone7Plus": "iPhone7Plus",
      "iPhone6s": "iPhone6s",
      "iPhone6sPlus": "iPhone6sPlus",
      "iPhone6": "iPhone6",
      "iPhone6Plus": "iPhone6Plus"
    },
    SamsungRepair: {
      "GalaxyS9Plus": "GalaxyS9Plus",
      "GalaxyS10Plus": "GalaxyS10Plus",
      "GalaxyS9": "GalaxyS9Plus",
      "GalaxyNote9": "GalaxyNote9",
      "SamsungGalaxyA7": "SamsungGalaxyA7",
      "SamsungGalaxyA8": "SamsungGalaxyA8",
      "SamsungGalaxyA510": "SamsungGalaxyA510",
      "SamsungGalaxyA6Plus": "SamsungGalaxyA6Plus",
      "TabS5EScreen": "TabS5EScreen",
      "SamsungGalaxyS10": "SamsungGalaxyS10",
      "SamsungGalaxyA50": "SamsungGalaxyA50",
      "SamsungGalaxyA70": "SamsungGalaxyA70",
      "SamsungGalaxyA8Plus": "SamsungGalaxyA8Plus",
      "GalaxyNote8": "GalaxyNote8",
      "GalaxyS8Plus": "GalaxyS8Plus",
      "GalaxyS8": "GalaxyS8",
      "GalaxyS7": "GalaxyS7",
      "GalaxyS7Edge": "GalaxyS7Edge",
      "GalaxyS6Edge": "GalaxyS6Edge",
      "GalaxyS6EdgePlus": "GalaxyS6EdgePlus",
      "GalaxyS6": "GalaxyS6",
      "GalaxyS5": "GalaxyS5",
      "GalaxyNote5": "GalaxyNote5",
      "GalaxyNote4": "GalaxyNote4"
    },
    iPadRepair: {
      "iPadPro105": "iPadPro105",
      "iPad5": "iPad5",
      "iPad6": "iPad6",
      "iPadPro12": "iPadPro12",
      "iPadPro97": "iPadPro97",
      "iPadAir2": "iPadAir2",
      "iPadAir": "iPadAir",
      "iPad4": "iPad4",
      "iPad2": "iPad2",
      "iPadMini4": "iPadMini4",
      "iPadMini3": "iPadMini3",
      "iPad3": "iPad3",
      "iPadMini2": "iPadMini2",
      "iPadMini": "iPadMini"
    },
    HardwareSupport: {
      "BatteryRepair_Replacement": "BatteryRepair_Replacement",
      "FanRepair_Replacement": "FanRepair_Replacement",
      "HardDriveRepair_Upgrade": "HardDriveRepair_Upgrade",
      "HardwareTroubleshooting": "HardwareTroubleshooting",
      "KeyboardRepair_Replacement": "KeyboardRepair_Replacement",
      "RAMUpgrade": "RAMUpgrade",
      "ScreenRepair": "ScreenRepair"
    },
    SoftwareSetupSupport: {
      "LaptopEmailIssue": "LaptopEmailIssue",
      "LaptopPrintingissue": "LaptopPrintingissue",
      "LaptopWi_Fi_NetworkIssue": "LaptopWi_Fi_NetworkIssue",
      "MACOSSetup": "MACOSSetup",
      "MACOSSupport": "MACOSSupport",
      "MicrosoftOfficeSetup": "MicrosoftOfficeSetup",
      "MicrosoftOfficeSupport": "MicrosoftOfficeSupport",
      "NewLaptop_DesktopSetup": "NewLaptop_DesktopSetup",
      "SlowPerformanceIssue": "SlowPerformanceIssue",
      "SoftwareSetup": "SoftwareSetup",
      "SoftwareSupport": "SoftwareSupport"
    }
  },
  Color: {
    iPhoneXsMax: {
      "White": "White",
      "Black": "Black",
      "Silver": "Silver",
      "Gray": "Gray",
      "Gold": "Gold"
    },
    iPhoneXR: {
      "White": "White",
      "Black": "Black",
      "Blue": "Blue",
      "Red": "Red"
    },
    iPhoneX: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
    },
    iPhone8: {
      "Silver": "Silver",
      "Gold": "Gold",
      "SpaceGray": "SpaceGray",
    },
    iPhone7: {
      "Silver": "Silver",
      "Gold": "Gold",
      "SpaceGray": "SpaceGray",
    },
    iPhone7Plus: {
      "Silver": "Silver",
      "Black": "Black",
      "Gold": "Gold",
      "RoseGold": "RoseGold",
      "JetBlack": "JetBlack"
    },
    iPhone6s: {
      "Silver": "Silver",
      "Gold": "Gold",
      "RoseGold": "RoseGold",
      "SpaceGray": "SpaceGray"
    },
    iPhone6sPlus: {
      "Silver": "Silver",
      "Gold": "Gold",
      "RoseGold": "RoseGold",
      "SpaceGray": "SpaceGray"
    },
    iPhone6: {
      "Silver": "Silver",
      "Gold": "Gold",
      "SpaceGray": "SpaceGray"
    },
    iPhone6Plus: {
      "Silver": "Silver",
      "Gold": "Gold",
      "SpaceGray": "SpaceGray"
    },

    GalaxyS9Plus: {
      "MidnightBlack": "MidnightBlack",
      "CoralBlue": "CoralBlue",
      "TitaniumGray": "TitaniumGray"
    },
    GalaxyS9: {
      "MidnightBlack": "MidnightBlack",
      "CoralBlue": "CoralBlue",
      "TitaniumGray": "TitaniumGray",
      "LilacPurple": "LilacPurple",
    },
    GalaxyNote9: {
      "MidnightBlack": "MidnightBlack",
      "Blue": "Blue",
      "MetallicCopper": "MetallicCopper",
      "LavenderPurple": "LavenderPurple",
    },
    SumsungGalaxyA7: {
      "Black": "Black",
      "Blue": "Blue",
      "Gold": "Gold",
      "Red": "Red",
    },
    SumsungGalaxyA8: {
      "White": "White",
      "Black": "Black",
      "Gold": "Gold",
      "Gray": "Gray",
    },
    SamsungGalaxyA50: {
      "White": "White",
      "Black": "Black",
      "Gold": "Gold",
      "Gray": "Gray",
    },
    GalaxyNote8: {
      "MidnightBlack": "MidnightBlack",
      "OrchidGray": "OrchidGray",
      "MapleGold": "MapleGold",
      "DeepSeaBlue": "DeepSeaBlue"
    },
    GalaxyS8Plus: {
      "MidnightBlack": "MidnightBlack",
      "OrchidGray": "OrchidGray",
      "MapleGold": "MapleGold",
      "ArcticSilver": "ArcticSilver",
      "CoralBlue": "CoralBlue",
    },
    GalaxyS8: {
      "MidnightBlack": "MidnightBlack",
      "OrchidGray": "OrchidGray",
      "MapleGold": "MapleGold",
      "ArcticSilver": "ArcticSilver",
      "CoralBlue": "CoralBlue",
    },
    GalaxyS7: {
      "GoldPlatinum": "GoldPlatinum",
      "SilverTitanium": "SilverTitanium",
      "WhitePearl": "WhitePearl",
      "BlackPearl": "BlackPearl",
    },
    GalaxyS7Edge: {
      "GoldPlatinum": "GoldPlatinum",
      "SilverTitanium": "SilverTitanium",
      "WhitePearl": "WhitePearl",
      "CoralBlue": "CoralBlue",
      "BlackPearl": "BlackPearl",
    },
    GalaxyS6Edge: {
      "GoldPlatinum": "GoldPlatinum",
      "Black Sapphire": "Black Sapphire",
      "WhitePearl": "WhitePearl",
    },
    GalaxyS6EdgePlus: {
      "GoldPlatinum": "GoldPlatinum",
      "Black Sapphire": "Black Sapphire",
      "WhitePearl": "WhitePearl",
    },
    GalaxyS6: {
      "GoldPlatinum": "GoldPlatinum",
      "Black Sapphire": "Black Sapphire",
      "WhitePearl": "WhitePearl",
    },
    GalaxyS5: {
      "White": "White",
      "Black": "Black",
      "Gold": "Gold",
      "Blue": "Blue",
    },
    GalaxyNote5: {
      "Black Sapphire": "Black Sapphire",
      "GoldPlatinum": "GoldPlatinum",
      "SilverTitanium": "SilverTitanium",
      "PinkGold": "PinkGold",
      "WhitePearl": "WhitePearl",
    },
    GalaxyNote4: {
      "White": "White",
      "Black": "Black",
      "Gold": "Gold",
    },

    iPadPro105: {
      "Silver": "Silver",
      "RoseGold": "RoseGold",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold",
    },
    iPad5: {
      "Silver": "Silver",
      "RoseGold": "RoseGold",
      "SpaceGray": "SpaceGray",
      "Gray": "Gray"
    },
    iPadPro12: {
      "Silver": "Silver",
      "RoseGold": "RoseGold",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadPro97: {
      "Silver": "Silver",
      "RoseGold": "RoseGold",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadAir2: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadAir: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPad4: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPad2: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadMini4: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadMini3: { "RoseGold": "RoseGold", },
    iPad3: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadMini2: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    },
    iPadMini: {
      "Silver": "Silver",
      "SpaceGray": "SpaceGray",
      "Gold": "Gold"
    }
  },
  Issue: {
    iPhoneXs: { "iPhoneXsScreen": "iPhoneXsScreen", },
    iPhoneXsMax: { "ScreenReplacement": "ScreenReplacement" },
    iPhoneXR: {},
    iPhoneX: {
      "CameraRepair": "CameraRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone8: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone8Plus: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone7: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone7Plus: {
      "CameraRepair": "CameraRepair",
      "iPhone7PlusAscreenRepair": "iPhone7PlusAscreenRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone6s: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone6sPlus: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone6: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    iPhone6Plus: {
      "CameraRepair": "CameraRepair",
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },

    GalaxyS9Plus: {
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    GalaxyS10Plus: {
      "GalaxyS10PlusBack Cover": "GalaxyS10PlusBack",
      "GalaxyS10PlusBodyRepair": "GalaxyS10PlusBodyRepair",
      "GalaxyS10PlusScreenRepair": "GalaxyS10PlusScreenRepair",
      "GalaxyS10ScreenRepair": "GalaxyS10ScreenRepair"
    },
    GalaxyS9: {
      "BodyRepair": "BodyRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    GalaxyNote9: {
      "GalaxyNote9BackCover": "GalaxyNote9BackCover",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    SamsungGalaxyA7: {},
    SamsungGalaxyA8: {},
    SamsungGalaxyA510: {},
    SamsungGalaxyA6Plus: {},
    TabS5EScreen: {},
    SamsungGalaxyS10: {},
    SamsungGalaxyA50: {},
    SamsungGalaxyA70: {},
    SamsungGalaxyA8Plus: {},
    GalaxyNote8: {},
    GalaxyS8Plus: {},
    GalaxyS8: {},
    GalaxyS7: {},
    GalaxyS7Edge: {},
    GalaxyS6EdgePlus: {},
    GalaxyS6: {
      "BackCover": "BackCover",
      "CameraRepair": "CameraRepair",
      "PowerRepair": "PowerRepair",
      "ScreenRepair": "ScreenRepair",
      "SoundRepair": "SoundRepair"
    },
    GalaxyS5: {},
    GalaxyNote4: {},
    GalaxyNote5: {},

    iPadPro105: {},
    iPad5: {},
    iPad6: {},
    iPadPro12: {},
    iPadPro97: {},
    iPadAir2: {},
    iPadAir: {},
    iPad4: {},
    iPad2: {},
    iPadMini4: {},
    iPadMini3: {},
    iPad3: {},
    iPadMini2: {},
    iPadMini: {},


    WiFiSupport: {
      "CablingInfrastructure": "CablingInfrastructure",
      "Router_APSetup": "Router_APSetup",
      "Router_APtroubleshooting": "Router_APtroubleshooting",
    },
    SecurityCameras: {
      "Wi_FiCamerasSetup": "Wi_FiCamerasSetup",
      "Wi_FiCamerasTroubleshooting": "Wi_FiCamerasTroubleshooting",
    },


    SoftwareSetupandSupport: {
      "LaptopEmailIssue": "LaptopEmailIssue",
      "LaptopPrintingIssue": "LaptopPrintingIssue",
      "LaptopWi_FiNetworkIssue": "LaptopWi_FiNetworkIssue",
      "MicrosoftOfficeSetup_Windows": "MicrosoftOfficeSetup_Windows",
      "MicrosoftOfficeSupport": "MicrosoftOfficeSupport",
      "NewLaptop_DesktopSetup": "NewLaptop_DesktopSetup",
      "SlowPerformanceIssue": "SlowPerformanceIssue",
      "SoftwareSetup": "SoftwareSetup",
      "SoftwareSupport": "SoftwareSupport",
      "WindowsOSSetup": "WindowsOSSetup",
      "WindowsOSSupport": "WindowsOSSupport",
    },

    Antivirus: {
      "AntivirusSetup": "AntivirusSetup",
      "Virus_MalwareRemoval": "Virus_MalwareRemoval",
      "Virus_MalwareRemova": "Virus_MalwareRemova"
    },



  },

  ///ISSUE TOOL TIP        ex  ...  in  WiFiSupport
  IssueTool: {
    Router_APSetup: ["I want to install a new router/access point. ",
                    "I want to purchase and install a new router/access point",
                     "My existing router doesn't work",
    ],

    Router_APtroubleshooting: ["Internet connection is intermittent ",
                              "Internet is slow",
                            "signal strength is poor"],


  },


}


const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_ARTICLE") {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === "SET_SELECTED_ITEM") {
    console.log(action.payload);
    return { ...state, ...action.payload };
  }

  return state;
}

export default rootReducer;