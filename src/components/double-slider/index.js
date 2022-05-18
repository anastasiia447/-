import React, { Fragment } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

const sliderStyle = {
  position: "relative",
  width: "100%",
};

const railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 42,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer",
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 14,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none",
  backgroundColor: "rgb(155,155,155)",
};

export function SliderRail({ getRailProps }) {
  return (
    <>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </>
  );
}

export function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps,
}) {
  return (
    <Fragment>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 5,
          width: 28,
          height: 42,
          cursor: "pointer",
          backgroundColor: "none",
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: 24,
          height: 24,
          borderRadius: "50%",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
          backgroundColor: disabled ? "#666" : "#6f64f8",
        }}
      />
    </Fragment>
  );
}

export function KeyboardHandle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps,
}) {
  return (
    <button
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        width: 24,
        height: 24,
        borderRadius: "50%",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
        backgroundColor: disabled ? "#666" : "#ffc400",
      }}
      {...getHandleProps(id)}
    />
  );
}

export function Track({ source, target, getTrackProps, disabled }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 14,
        zIndex: 1,
        backgroundColor: disabled ? "#999" : "#6f64f8",
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
}

export function Tick({ tick, count }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 14,
          width: 1,
          height: 5,
          backgroundColor: "rgb(200,200,200)",
          left: `${tick.percent}%`,
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: 22,
          fontSize: 10,
          textAlign: "center",
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {tick.value}
      </div>
    </div>
  );
}

export const DoubleSlider = ({
  domain,
  min = 0,
  max = 100,
  step = 1,
  onChange: onChangeCallback,
}) => {
  const onChange = (values) => {
    onChangeCallback?.({ min: values[0], max: values[1] });
  };

  return (
    <div>
      <Slider
        mode={2}
        step={step}
        domain={domain}
        rootStyle={sliderStyle}
        onChange={onChange}
        values={[min, max]}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={10}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
};