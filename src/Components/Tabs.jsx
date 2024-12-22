import { Tab, Tabs } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import slugify from "slugify";
import { classNames } from "@/lib/utils";
import useMobileView from "@/Hooks/useMobileView";
import { useEffect } from "react";
import { color } from "framer-motion";

const TabStyle = ({ bg='', selectedColor='', selectedBg='', width='', height='', padding='' }) => (
  {
    "&.Mui-selected": {
      color: selectedColor ?? "#000",
      backgroundColor: selectedBg ?? "#5F38FB",
      boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.2)",
      border: "2px solid #000",
      padding: padding ?? "16px 24px",
      fontWeight: "700",
    },
    backgroundColor: bg ?? "#D5C5C8",
    // border: "1px solid #C8DCFE",
    borderRadius: "20px",
    width: width ?? "286px",
    height: height ?? "54px",
    padding: padding ?? "16px 24px",
    color: "#FFF"
  }
)

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}

export default function BasicTabs(props) {
  const navigate = useNavigate();
  const isMobileView = useMobileView();

  const {
    tabData,
    onlyTabs = false,
    value,
    setValue,
    applyClass = "",
    applyTabLabelClass = "",
    tabStyle = {},
    onTabChange = () => {},
    mobTop = 850,
    DeskTop = 930,
  } = props;

  useEffect(()=> {
    console.log(tabData, onlyTabs, value, setValue, "-----------")
  }, [])

  const handleChange = (newValue) => {
    setTimeout(() => {
      setValue(newValue);
    }, 10);
    if (tabData?.[newValue]?.route) {
      navigate(tabData?.[newValue]?.route, {
        state: { scrollTo: isMobileView ? mobTop : DeskTop },
      });
    }
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={(_, v) => handleChange(v)}
        textColor="primary"
        aria-label="simple-tabs"
        className={classNames("w-full mx-auto [&_.MuiTabs-flexContainer]:px-3 md:[&_.MuiTabs-flexContainer]:px-6 [&_.MuiTabs-flexContainer]:py-4 md:[&_.MuiTabs-flexContainer]:py-6",
          applyClass
        )}
        variant="scrollable"
        scrollButtons
        // centered={true}
        sx={{
          "& .MuiTabs-flexContainer": {
            width: "fit-content",
            gap: { xs: "1rem", md: "1.5rem" },
            margin: "0 auto",
          },
          "& .MuiTabs-indicator": {
            display: "none"
          }
        }}
      >
        {tabData?.map((tab) => (
          <Tab
            key={slugify(tab?.label, "")}
            onClick={() => onTabChange(tab)}
            label={
              <div className={classNames(
                "font-manrope text-base normal-case text-center ",
                applyTabLabelClass
              )}>
                {tab?.label}
              </div>
            }
            wrapped
            sx={TabStyle({ 
              bg: tabStyle.bg || '', 
              selectedColor: tabStyle.selectedColor || '', 
              selectedBg: tabStyle.selectedBg || '',
              width: tabStyle.width || '',
              height: tabStyle.height || '',
              padding: tabStyle.padding || '',
              color: color
            })}
          />
        ))}
      </Tabs>

      {!onlyTabs &&
        tabData?.map((tab, idx) => (
          <CustomTabPanel key={idx} value={value} index={idx}>
            {tab?.route ? (
              <Outlet />
            ) : (
              <div className="pt-4 w-full block">{tab?.content}</div>
            )}
          </CustomTabPanel>
      ))}

    </>
  );
}