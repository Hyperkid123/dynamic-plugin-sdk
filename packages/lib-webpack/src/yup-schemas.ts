import * as yup from 'yup';
import {
  extensionArraySchema,
  pluginRuntimeMetadataSchema,
} from '@openshift/dynamic-plugin-sdk/src/shared-webpack';

/**
 * Schema for `PluginBuildMetadata` objects.
 */
export const pluginBuildMetadataSchema = pluginRuntimeMetadataSchema.shape({
  // TODO(vojtech): Yup lacks native support for map-like structures with arbitrary keys
  exposedModules: yup.object(),
});

/**
 * Schema for `PluginModuleFederationSettings` objects.
 */
const pluginModuleFederationSettingsSchema = yup.object().required().shape({
  libraryType: yup.string(),
  sharedScopeName: yup.string(),
});

/**
 * Schema for `PluginEntryCallbackSettings` objects.
 */
const pluginEntryCallbackSettingsSchema = yup.object().required().shape({
  name: yup.string(),
  pluginID: yup.string(),
});

/**
 * Schema for adapted `DynamicRemotePluginOptions` objects.
 */
export const dynamicRemotePluginAdaptedOptionsSchema = yup.object().required().shape({
  pluginMetadata: pluginBuildMetadataSchema,
  extensions: extensionArraySchema,
  sharedModules: yup.object().required(),
  moduleFederationSettings: pluginModuleFederationSettingsSchema,
  entryCallbackSettings: pluginEntryCallbackSettingsSchema,
  entryScriptFilename: yup.string().required(),
  pluginManifestFilename: yup.string().required(),
});
